import { PropsWithChildren } from 'react';
import s from './portfolio.module.scss';
import { PortfolioTabs } from '@/features/portfolio-tabs/portfolio-tabs';

const Layout = ({ children }: PropsWithChildren) => {
  
  return (
    <div className={s.layout}>
      <PortfolioTabs />
      {children}
    </div>
  );
};

export default Layout;
