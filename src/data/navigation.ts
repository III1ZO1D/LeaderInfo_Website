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
      { label: 'Специалисту по безопасности', href: '/products/bezopasnost' },
      { label: 'Строителю, проектировщику', href: '/products/stroitelyu' },
      { label: 'Специалисту промышленности', href: '/products/promyshlennost' },
      { label: 'Инженеру, конструктору', href: '/products/mashinostroenie' },
      { label: 'Специалисту лаборатории', href: '/products/laboratoriya' },
      { label: 'Пищевой/Хим/Фарм промышленности', href: '/products/pishchevaya-khim-farm' },
      { label: 'Специалисту в медицине', href: '/products/medicina' },
      { label: 'Юристу, бухгалтеру, HR', href: '/products/yuristu-buhgalteru' },
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
      { label: 'По безопасности', href: '/products/bezopasnost' },
      { label: 'Строителю', href: '/products/stroitelyu' },
      { label: 'Промышленности', href: '/products/promyshlennost' },
      { label: 'Инженеру', href: '/products/mashinostroenie' },
      { label: 'Лаборатории', href: '/products/laboratoriya' },
      { label: 'Медицине', href: '/products/medicina' },
      { label: 'Юристу/Бухгалтеру', href: '/products/yuristu-buhgalteru' },
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
