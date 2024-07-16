import { LinkedTabs } from '@/components/tabs/linked-tabs';
import s from './header.module.scss';
import { Select } from '@/components/select/select';
import { useHeader } from './use-header';
import { LocaleEnum } from '@/types/locales';
import { useLocale, useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const { handleChangeLocale } = useHeader();

  return (
    <header className={s.feature}>
      <LinkedTabs
        tabs={[
          { label: t('Главная'), href: '/' },
          { label: t('Портфолио'), href: '/portfolio' },
          { label: t('Примеры работ'), href: '/examples' },
          { label: t('Контакты'), href: '/contacts' },
        ]}
        optionClassname={s.option}
      />
      <Select
        options={[LocaleEnum.ru, LocaleEnum.en]}
        value={locale}
        onSelect={handleChangeLocale}
      />
    </header>
  );
};
