'use client'; 

import s from './header.module.scss';
import { Select } from '@/components/select/select';
import { useHeader } from './use-header';
import { LocaleEnum } from '@/types/locales';
import { useLocale } from 'next-intl';
import { Navigation } from './navigation/navigation';
import { BurgerMenu } from './burger-menu/burger-menu';

export const Header = () => {
  const locale = useLocale();
  const { handleChangeLocale } = useHeader();

  return (
    <header className={s.feature}>
      <BurgerMenu />
      <Navigation />
      <Select
        options={[LocaleEnum.Ru, LocaleEnum.En]}
        value={locale}
        onSelect={handleChangeLocale}
        inputClassname={s.select}
        closeOnSelect
      />
    </header>
  );
};
