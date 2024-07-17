export enum NavigationTabsEnum {
  Portfolio = 'portfolio',
  Examples = 'examples',
  Contacts = 'contacts',
  Home = '',
}
const tabs = [
  { label: 'Главная', href: NavigationTabsEnum.Home },
  { label: 'Портфолио', href: NavigationTabsEnum.Portfolio },
  { label: 'Примеры работ', href: NavigationTabsEnum.Examples },
  { label: 'Контакты', href: NavigationTabsEnum.Contacts },
];

export const navigationTabs = tabs.map((tab) => ({ ...tab, href: `/${tab.href}` }));
