import { PropsWithChildren } from 'react';
import s from './examples.module.scss';
import { ExamplesTabs } from '@/features/examples-tabs/examples-tabs';

const Layout = ({ children }: PropsWithChildren) => {
  
  return (
    <div className={s.layout}>
      <ExamplesTabs />
      {children}
    </div>
  );
};

export default Layout;
