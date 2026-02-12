import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности - ЛидерИнфо',
  description:
    'Политика конфиденциальности ООО «ЛидерИнфо». Информация о сборе, хранении и использовании персональных данных.',
  keywords: [
    'политика конфиденциальности',
    'персональные данные',
    'ЛидерИнфо',
  ],
  openGraph: {
    title: 'Политика конфиденциальности - ЛидерИнфо',
    description:
      'Политика конфиденциальности ООО «ЛидерИнфо».',
    type: 'website',
    url: 'https://leaderinfo.ru/privacy',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/privacy',
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Политика конфиденциальности' },
  ]);

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Политика конфиденциальности' },
          ]}
        />

        <section className="pt-10 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">
                Политика конфиденциальности
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок сбора,
                хранения, использования и защиты персональных данных пользователей
                сайта leaderinfo.ru (далее — «Сайт»), принадлежащего ООО «ЛидерИнфо»
                (далее — «Оператор»).
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                1. Сбор персональных данных
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор собирает следующие персональные данные при использовании
                Сайта:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Название организации</li>
                <li>Номер телефона (при добровольном предоставлении)</li>
                <li>Содержание обращения через контактную форму</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Данные предоставляются пользователем добровольно при заполнении
                форм обратной связи, заявок на демо-доступ и контактных форм.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                2. Использование данных
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Персональные данные используются исключительно для:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Обработки заявок и обращений пользователей</li>
                <li>Предоставления информации о продуктах и услугах</li>
                <li>Организации демо-доступа к справочным системам</li>
                <li>Связи с пользователем для консультации</li>
                <li>Улучшения качества обслуживания</li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                3. Хранение и защита данных
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор принимает необходимые организационные и технические меры
                для защиты персональных данных от несанкционированного доступа,
                утраты, изменения или уничтожения. Персональные данные хранятся
                в течение срока, необходимого для достижения целей обработки,
                но не более 3 лет с момента последнего обращения.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                4. Файлы cookie
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Сайт использует файлы cookie для обеспечения корректной работы,
                аналитики посещаемости и улучшения пользовательского опыта.
                Пользователь может отключить cookie в настройках браузера,
                однако это может повлиять на функциональность Сайта.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                5. Передача данных третьим лицам
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор не передаёт персональные данные третьим лицам без
                согласия пользователя, за исключением случаев, предусмотренных
                законодательством Российской Федерации.
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                6. Права пользователя
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Пользователь имеет право:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Запросить информацию об обработке своих персональных данных</li>
                <li>Потребовать уточнения, блокирования или удаления персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Для реализации указанных прав необходимо направить запрос
                на адрес электронной почты:{' '}
                <a
                  href="mailto:info@leaderinfo.ru"
                  className="text-primary hover:underline"
                >
                  info@leaderinfo.ru
                </a>
              </p>

              <h2 className="text-xl font-semibold mt-10 mb-4">
                7. Изменения политики
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор оставляет за собой право вносить изменения в настоящую
                Политику. Актуальная редакция размещена на данной странице.
                Дата последнего обновления: февраль 2025 года.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
