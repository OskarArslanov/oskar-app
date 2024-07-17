import { BurgerMenuIcon } from '@/assets/svg/burger-menu';
import { Button } from '@/components/button/button';
import s from './burger-menu.module.scss';
import cn from 'classnames';
import { Drawer } from '@/components/drawer/drawer';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useBurgerMenu } from './use-burger-menu';
import { usePathname } from 'next/navigation';
import { navigationTabs } from '@/routes/navigation';

export const BurgerMenu = () => {
  const t = useTranslations('header');
  const { isOpen, ref, toggle } = useBurgerMenu();
  const pathname = usePathname();

  return (
    <div className={cn(s.feature, 'hide__L', 'hide__XL')} ref={ref}>
      <Button onClick={toggle}>
        <BurgerMenuIcon height={16} width={16} />
      </Button>
      <Drawer isOpen={isOpen} onClose={toggle}>
        {navigationTabs.map(({ href, label }) => {
          const isActive = href === pathname;

          return (
            <Link key={label} href={href} className={cn(s.link, isActive && s.active)}>
              {t(label)}
            </Link>
          );
        })}
      </Drawer>
    </div>
  );
};
