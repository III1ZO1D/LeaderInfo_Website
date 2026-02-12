import { NextResponse } from 'next/server';
import { quickLeadSchema } from '@/lib/validations';
import { sendAdminNotification, sendUserConfirmation } from '@/lib/email';
import { createBitrixLead } from '@/lib/crm';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (!checkRateLimit(`demo:${ip}`, 3, 60_000)) {
      return NextResponse.json(
        { error: 'Слишком много заявок. Попробуйте через минуту.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = quickLeadSchema.parse(body);

    console.log('Новая заявка на демо:', data);

    // Send emails and create CRM lead in parallel
    await Promise.allSettled([
      sendAdminNotification('demo', data),
      sendUserConfirmation(data.email, data.name, 'demo'),
      createBitrixLead({ ...data, type: 'demo' }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Некорректные данные формы' },
        { status: 400 }
      );
    }

    console.error('Ошибка обработки заявки на демо:', error);
    return NextResponse.json(
      { error: 'Не удалось обработать заявку' },
      { status: 500 }
    );
  }
}
