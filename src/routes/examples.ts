import { NavigationTabsEnum } from './navigation';

export enum ExamplesTabsEnum {
  Ui = 'ui',
  Register = 'register',
  Login = 'login',
  Todo = 'todo',
  List = 'list',
}

export const tabs = [
  { label: 'Ui kit', href: ExamplesTabsEnum.Ui },
  { label: 'Register', href: ExamplesTabsEnum.Register },
  { label: 'Login', href: ExamplesTabsEnum.Login },
  { label: 'Todo', href: ExamplesTabsEnum.Todo },
  { label: 'List', href: ExamplesTabsEnum.List },
];

export const examplesTabs = tabs.map((tab) => ({
  ...tab,
  href: `/${NavigationTabsEnum.Examples}/${tab.href}`,
}));
