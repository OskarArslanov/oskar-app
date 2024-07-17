'use client';

import { LinkedTabs } from '@/components/tabs/linked-tabs';
import s from './portfolio-tabs.module.scss';
import { portfolioTabs } from '@/routes/portfolio';
import { usePathname } from 'next/navigation';

export const PortfolioTabs = () => {
  const activeLinkedTab = usePathname();

  return (
    <LinkedTabs
      activeTab={activeLinkedTab}
      tabs={portfolioTabs}
      className={s.feature}
      activeOptionClassname={s.active}
      optionClassname={s.option}
    />
  );
};
