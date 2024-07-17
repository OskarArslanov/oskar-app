import { FC, memo, PropsWithChildren, useEffect } from 'react';
import s from './drawer.module.scss';
import cn from 'classnames';
import { Button } from '../button/button';
import { ArrowIcon } from '@/assets/svg/arrow';
import { Backdrop } from '../backdrop/backdrop';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerBase: FC<Props> = (props) => {
  const { children, isOpen, onClose } = props;

  return (
    <div className={cn(s.component, isOpen && s.isOpen)}>
      <ul className={s.list}>{children}</ul>
      <Button id={s['drawer-close-button']} onClick={onClose}>
        <ArrowIcon height={16} width={16} className={s.arrow} />
      </Button>
      <Backdrop isOpen={isOpen} id="drawer" />
    </div>
  );
};

export const Drawer = memo(DrawerBase);
