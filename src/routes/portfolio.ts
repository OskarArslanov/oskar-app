import { NavigationTabsEnum } from './navigation';

export enum PortfolioTabsEnum {
  Ui = 'ui',
  Register = 'register',
  Login = 'login',
  Todo = 'todo',
  List = 'list',
}

export const tabs = [
  { label: 'Ui kit', href: PortfolioTabsEnum.Ui },
  { label: 'Register', href: PortfolioTabsEnum.Register },
  { label: 'Login', href: PortfolioTabsEnum.Login },
  { label: 'Todo', href: PortfolioTabsEnum.Todo },
  { label: 'List', href: PortfolioTabsEnum.List },
];

export const portfolioTabs = tabs.map((tab) => ({
  ...tab,
  href: `/${NavigationTabsEnum.Portfolio}/${tab.href}`,
}));
