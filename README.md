# ЛидерИнфо - Сайт дистрибьютора TechExpert

Современный B2B сайт для дистрибьютора справочных систем TechExpert/Кодекс.

## 🚀 Быстрый старт

### Предварительные требования

1. **Установите Node.js** (версия 18.x или выше):
   - Скачайте с [nodejs.org](https://nodejs.org/)
   - При установке отметьте "Automatically install necessary tools"

2. **Проверьте установку**:
   ```bash
   node --version
   npm --version
   ```

### Установка зависимостей

После установки Node.js выполните в корневой папке проекта:

```bash
npm install
```

Эта команда установит все необходимые зависимости из `package.json`:
- Next.js 14 (React framework)
- Tailwind CSS (стилизация)
- Framer Motion & GSAP (анимации)
- React Hook Form & Zod (формы и валидация)
- И другие...

### Настройка shadcn/ui

После установки зависимостей, установите компоненты shadcn/ui:

```bash
npx shadcn-ui@latest add button card dialog form input select textarea accordion tabs badge separator
```

### Запуск dev сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Маркетинговые страницы
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # shadcn/ui компоненты
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Секции страниц
│   ├── forms/              # Формы
│   └── shared/             # Общие компоненты
├── data/                   # Данные (до подключения CMS)
├── lib/                    # Утилиты
└── types/                  # TypeScript типы
```

## 🎨 Технологический стек

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion + GSAP
- **Forms**: React Hook Form + Zod
- **SEO**: Next.js Metadata API + JSON-LD

## 📋 Следующие шаги

1. ✅ Установить Node.js
2. ✅ Выполнить `npm install`
3. ✅ Установить shadcn/ui компоненты
4. ✅ Запустить `npm run dev`
5. 🔄 Начать создание компонентов (Header, Footer)
6. 🔄 Реализовать главную страницу
7. 🔄 Создать страницы продуктов

## 🔗 Полезные ссылки

- [План разработки](C:\Users\podma\.claude\plans\lazy-honking-moore.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📝 Лицензия

Частный проект. Все права защищены © 2024 ЛидерИнфо
