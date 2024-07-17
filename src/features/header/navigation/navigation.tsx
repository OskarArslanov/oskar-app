import { LinkedTabs } from '@/components/tabs/linked-tabs';
import { useTranslations } from 'next-intl';
import s from './navigation.module.scss';
import { navigationTabs } from '@/routes/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Navigation = () => {
  const t = useTranslations('header');
  const activeLinkedTab = '/' + (useSelectedLayoutSegment() || '');

  return (
    <LinkedTabs
      activeTab={activeLinkedTab}
      tabs={navigationTabs.map((item) => ({ ...item, label: t(item.label) }))}
      optionClassname={s.option}
      activeOptionClassname={s.active}
      className="hide__S hide__M"
    />
  );
};
