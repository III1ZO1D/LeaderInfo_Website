import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { sendAdminNotification, sendUserConfirmation } from '@/lib/email';
import { createBitrixLead } from '@/lib/crm';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (!checkRateLimit(`contact:${ip}`, 3, 60_000)) {
      return NextResponse.json(
        { success: false, error: 'Слишком много сообщений. Попробуйте через минуту.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    console.log('Новое сообщение с формы контактов:', data);

    // Send emails and create CRM lead in parallel
    await Promise.allSettled([
      sendAdminNotification('contact', data),
      sendUserConfirmation(data.email, data.name, 'contact'),
      createBitrixLead({ ...data, type: 'contact' }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Некорректные данные формы' },
        { status: 400 }
      );
    }

    console.error('Ошибка обработки формы контактов:', error);
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
