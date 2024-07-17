export enum NavigationEnum {
  Portfolio = 'portfolio',
  Examples = 'examples',
  Contacts = 'contacts',
  Home = '',
}
export const navigationTabs = [
  { label: 'Главная', href: NavigationEnum.Home },
  { label: 'Портфолио', href: NavigationEnum.Portfolio },
  { label: 'Примеры работ', href: NavigationEnum.Examples },
  { label: 'Контакты', href: NavigationEnum.Contacts },
];
