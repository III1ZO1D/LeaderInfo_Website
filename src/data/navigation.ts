export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Продукты',
    href: '/products',
    children: [
      { label: 'Все продукты', href: '/products' },
      { label: 'Стройтехнолог', href: '/products/stroytekhnolog' },
      { label: 'Охрана труда', href: '/products/ohrana-truda' },
      { label: 'Экология', href: '/products/ekologiya' },
      { label: 'Нормы, правила, стандарты', href: '/products/normy-pravila-standarty' },
      { label: 'Электроэнергетика', href: '/products/elektroenergetika' },
    ],
  },
  {
    label: 'Решения',
    href: '/solutions',
    children: [
      { label: 'Для строительства', href: '/solutions/construction' },
      { label: 'Для охраны труда', href: '/solutions/safety' },
      { label: 'Для экологии', href: '/solutions/ecology' },
      { label: 'Для промышленности', href: '/solutions/industrial' },
    ],
  },
  {
    label: 'Цены',
    href: '/pricing',
  },
  {
    label: 'О компании',
    href: '/about',
    children: [
      { label: 'О нас', href: '/about' },
      { label: 'Кейсы', href: '/case-studies' },
    ],
  },
  {
    label: 'Контакты',
    href: '/contact',
  },
];

export const footerNavigation = {
  products: {
    title: 'Продукты',
    items: [
      { label: 'Стройтехнолог', href: '/products/stroytekhnolog' },
      { label: 'Охрана труда', href: '/products/ohrana-truda' },
      { label: 'Экология', href: '/products/ekologiya' },
      { label: 'Нормы, правила, стандарты', href: '/products/normy-pravila-standarty' },
      { label: 'Электроэнергетика', href: '/products/elektroenergetika' },
    ],
  },
  solutions: {
    title: 'Решения',
    items: [
      { label: 'Для строительства', href: '/solutions/construction' },
      { label: 'Для охраны труда', href: '/solutions/safety' },
      { label: 'Для экологии', href: '/solutions/ecology' },
      { label: 'Для промышленности', href: '/solutions/industrial' },
    ],
  },
  company: {
    title: 'Компания',
    items: [
      { label: 'О нас', href: '/about' },
      { label: 'Кейсы', href: '/case-studies' },
      { label: 'Контакты', href: '/contact' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
    ],
  },
};
