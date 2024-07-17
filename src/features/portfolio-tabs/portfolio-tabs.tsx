'use client';

import { LinkedTabs } from '@/components/tabs/linked-tabs';
import s from './portfolio-tabs.module.scss';
import { portfolioTabs } from '@/routes/portfolio';
import { usePathname } from 'next/navigation';

export const PortfolioTabs = () => {
  const pathname = usePathname();

  return (
    <LinkedTabs
      activeTab={pathname}
      tabs={portfolioTabs}
      className={s.feature}
      activeOptionClassname={s.active}
      optionClassname={s.option}
    />
  );
};
