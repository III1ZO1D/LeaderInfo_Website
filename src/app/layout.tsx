import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { DemoModalProvider } from '@/components/providers/DemoModalProvider';
import { DemoModal } from '@/components/modals/DemoModal';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leaderinfo.ru'),
  title: {
    default: 'ЛидерИнфо - Официальный дистрибьютор TechExpert',
    template: '%s | ЛидерИнфо',
  },
  description:
    'Профессиональные справочные системы ТехЭксперт и Кодекс. Полный сервис от внедрения до обучения. Официальный дистрибьютор с 2000 года.',
  keywords: [
    'техэксперт',
    'кодекс',
    'справочная система',
    'нормативная документация',
    'строительные нормы',
    'охрана труда',
  ],
  authors: [{ name: 'ЛидерИнфо' }],
  creator: 'ЛидерИнфо',
  publisher: 'ЛидерИнфо',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://leaderinfo.ru',
    siteName: 'ЛидерИнфо',
    title: 'ЛидерИнфо - Официальный дистрибьютор TechExpert',
    description:
      'Профессиональные справочные системы ТехЭксперт и Кодекс с полным сервисом',
    images: [
      {
        url: '/images/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'ЛидерИнфо',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЛидерИнфо - Официальный дистрибьютор TechExpert',
    description:
      'Профессиональные справочные системы ТехЭксперт и Кодекс с полным сервисом',
    images: ['/images/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://leaderinfo.ru',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <DemoModalProvider>
          {children}
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}
