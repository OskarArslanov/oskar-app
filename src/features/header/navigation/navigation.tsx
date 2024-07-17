import { LinkedTabs } from '@/components/tabs/linked-tabs';
import { useTranslations } from 'next-intl';
import s from './navigation.module.scss';
import { navigationTabs } from '../consts';

export const Navigation = () => {
  const t = useTranslations('header');

  return (
    <LinkedTabs
      tabs={navigationTabs.map((item) => ({ ...item, label: t(item.label) }))}
      optionClassname={s.option}
      className="hide__S hide__M"
    />
  );
};
