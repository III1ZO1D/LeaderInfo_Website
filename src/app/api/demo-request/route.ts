import { NextResponse } from 'next/server';
import { quickLeadSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quickLeadSchema.parse(body);

    // TODO: Интегрировать с email-сервисом (SendGrid, Resend и т.д.)
    // TODO: Интегрировать с CRM (Bitrix24, HubSpot и т.д.)

    console.log('Новая заявка на демо:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка обработки заявки:', error);
    return NextResponse.json(
      { error: 'Не удалось обработать заявку' },
      { status: 400 }
    );
  }
}
