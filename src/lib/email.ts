import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@leaderinfo.ru';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@leaderinfo.ru';

const isConfigured = SMTP_HOST && SMTP_USER && SMTP_PASS;

function createTransport() {
  if (!isConfigured) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

// --- Email Templates ---

function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html lang="ru">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#0a0f1e;padding:24px 32px;">
            <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.5px;">ЛидерИнфо</span>
            <span style="color:#6b7280;font-size:14px;margin-left:12px;">Дистрибьютор TechExpert</span>
          </td>
        </tr>
        <!-- Content -->
        <tr>
          <td style="padding:32px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 32px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              ЛидерИнфо — официальный дистрибьютор справочных систем TechExpert с 2000 года<br>
              Телефон: +7 (XXX) XXX-XX-XX | Email: info@leaderinfo.ru
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// --- Admin Notification ---

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}

export async function sendAdminNotification(
  type: 'demo' | 'contact',
  data: LeadData
): Promise<boolean> {
  const transport = createTransport();

  const typeLabel = type === 'demo' ? 'Заявка на демо-доступ' : 'Сообщение с формы контактов';
  const subject = `🔔 ${typeLabel} — ${data.name}, ${data.company}`;

  const rows = [
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;width:140px;">Имя</td><td style="padding:8px 12px;color:#111827;">${escapeHtml(data.name)}</td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#2563eb;">${escapeHtml(data.email)}</a></td></tr>`,
    `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Компания</td><td style="padding:8px 12px;color:#111827;">${escapeHtml(data.company)}</td></tr>`,
  ];

  if (data.phone) {
    rows.push(`<tr><td style="padding:8px 12px;font-weight:600;color:#374151;">Телефон</td><td style="padding:8px 12px;"><a href="tel:${escapeHtml(data.phone)}" style="color:#2563eb;">${escapeHtml(data.phone)}</a></td></tr>`);
  }

  if (data.message) {
    rows.push(`<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;">Сообщение</td><td style="padding:8px 12px;color:#111827;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</td></tr>`);
  }

  const html = baseTemplate(`
    <h2 style="margin:0 0 16px;font-size:20px;color:#111827;">${typeLabel}</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:6px;border:1px solid #e5e7eb;">
      ${rows.join('')}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:#6b7280;">
      Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    </p>
  `);

  if (!transport) {
    console.log(`[Email] SMTP не настроен. ${typeLabel}:`, data);
    return false;
  }

  try {
    await transport.sendMail({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('[Email] Ошибка отправки уведомления администратору:', error);
    return false;
  }
}

// --- User Confirmation ---

export async function sendUserConfirmation(
  email: string,
  name: string,
  type: 'demo' | 'contact'
): Promise<boolean> {
  const transport = createTransport();

  const isDemo = type === 'demo';
  const subject = isDemo
    ? 'Ваша заявка на демо-доступ получена — ЛидерИнфо'
    : 'Мы получили ваше сообщение — ЛидерИнфо';

  const html = baseTemplate(`
    <h2 style="margin:0 0 8px;font-size:22px;color:#111827;">
      ${isDemo ? 'Спасибо за заявку!' : 'Мы получили ваше сообщение!'}
    </h2>
    <p style="margin:0 0 24px;font-size:15px;color:#4b5563;">
      ${escapeHtml(name)}, благодарим вас за обращение в ЛидерИнфо.
    </p>

    <h3 style="margin:0 0 12px;font-size:16px;color:#111827;">Что будет дальше:</h3>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:12px 16px;background:#eff6ff;border-radius:6px;margin-bottom:8px;">
          <span style="color:#2563eb;font-weight:700;font-size:18px;">1.</span>
          <span style="color:#1e40af;font-size:14px;margin-left:8px;">Наш специалист изучит вашу заявку</span>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#eff6ff;border-radius:6px;">
          <span style="color:#2563eb;font-weight:700;font-size:18px;">2.</span>
          <span style="color:#1e40af;font-size:14px;margin-left:8px;">${isDemo ? 'Подберёт оптимальное решение для вашей компании' : 'Подготовит ответ на ваш вопрос'}</span>
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:12px 16px;background:#eff6ff;border-radius:6px;">
          <span style="color:#2563eb;font-weight:700;font-size:18px;">3.</span>
          <span style="color:#1e40af;font-size:14px;margin-left:8px;">Свяжется с вами в течение 2 часов</span>
        </td>
      </tr>
    </table>

    ${isDemo ? `
    <div style="margin-top:24px;padding:16px;background:#f0fdf4;border-radius:6px;border:1px solid #bbf7d0;">
      <p style="margin:0;font-size:14px;color:#166534;">
        💡 <strong>Знаете ли вы?</strong> Наши клиенты экономят до 30% по сравнению с прямой покупкой, получая полный сервис от внедрения до обучения.
      </p>
    </div>
    ` : ''}

    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;">
      Если у вас срочный вопрос, звоните: +7 (XXX) XXX-XX-XX
    </p>
  `);

  if (!transport) {
    console.log(`[Email] SMTP не настроен. Подтверждение для ${email} не отправлено.`);
    return false;
  }

  try {
    await transport.sendMail({
      from: EMAIL_FROM,
      to: email,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('[Email] Ошибка отправки подтверждения пользователю:', error);
    return false;
  }
}

// --- Helpers ---

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
