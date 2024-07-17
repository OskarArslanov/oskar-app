import { BurgerMenuIcon } from '@/assets/svg/burger-menu';
import { Button } from '@/components/button/button';
import s from './burger-menu.module.scss';
import cn from 'classnames';
import { Drawer } from '@/components/drawer/drawer';
import { useTranslations } from 'next-intl';
import { navigationTabs } from '../consts';
import Link from 'next/link';
import { useToggle } from '@/shared/hooks/use-toggle';
import { useBurgerMenu } from './use-burger-menu';

export const BurgerMenu = () => {
  const t = useTranslations('header');
  const { isOpen, ref, toggle } = useBurgerMenu();

  return (
    <div className={cn(s.feature, 'hide__L', 'hide__XL')} ref={ref}>
      <Button onClick={toggle}>
        <BurgerMenuIcon height={16} width={16} />
      </Button>
      <Drawer isOpen={isOpen} onClose={toggle}>
        {navigationTabs.map(({ href, label }) => (
          <Link key={label} href={href} className={s.link}>
            {t(label)}
          </Link>
        ))}
      </Drawer>
    </div>
  );
};
