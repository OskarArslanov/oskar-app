'use client';

import { LinkedTabs } from '@/components/tabs/linked-tabs';
import s from './examples-tabs.module.scss';
import { usePathname } from 'next/navigation';
import { examplesTabs } from '@/routes/examples';

export const ExamplesTabs = () => {
  const activeLinkedTab = usePathname();

  return (
    <LinkedTabs
      activeTab={activeLinkedTab}
      tabs={examplesTabs}
      className={s.feature}
      activeOptionClassname={s.active}
      optionClassname={s.option}
    />
  );
};
