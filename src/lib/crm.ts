const BITRIX24_WEBHOOK_URL = process.env.BITRIX24_WEBHOOK_URL;

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  type: 'demo' | 'contact';
}

export async function createBitrixLead(data: LeadData): Promise<boolean> {
  if (!BITRIX24_WEBHOOK_URL) {
    console.log('[CRM] Bitrix24 webhook не настроен. Лид не создан:', {
      name: data.name,
      company: data.company,
      type: data.type,
    });
    return false;
  }

  const sourceMap: Record<string, string> = {
    demo: 'WEB',
    contact: 'WEBFORM',
  };

  const titleMap: Record<string, string> = {
    demo: `Заявка на демо — ${data.company}`,
    contact: `Обращение — ${data.company}`,
  };

  const fields: Record<string, unknown> = {
    TITLE: titleMap[data.type],
    NAME: data.name,
    COMPANY_TITLE: data.company,
    SOURCE_ID: sourceMap[data.type],
    EMAIL: [{ VALUE: data.email, VALUE_TYPE: 'WORK' }],
    COMMENTS: data.message || '',
  };

  if (data.phone) {
    fields.PHONE = [{ VALUE: data.phone, VALUE_TYPE: 'WORK' }];
  }

  try {
    const url = `${BITRIX24_WEBHOOK_URL.replace(/\/$/, '')}/crm.lead.add.json`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[CRM] Bitrix24 ошибка:', response.status, text);
      return false;
    }

    const result = await response.json();
    console.log('[CRM] Лид создан в Bitrix24, ID:', result.result);
    return true;
  } catch (error) {
    console.error('[CRM] Ошибка создания лида в Bitrix24:', error);
    return false;
  }
}
