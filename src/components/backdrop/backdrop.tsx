import { FC, memo, useEffect } from 'react';
import s from './backdrop.module.scss';

interface Props {
  isOpen: boolean;
}

const BackdropBase: FC<Props> = ({ isOpen }) => {
  useEffect(() => {
    const backdrop = document.createElement('div');
    backdrop.className = s.component;
    document.body.appendChild(backdrop);
  }, []);

  useEffect(() => {
    const backdrop = document.querySelector(`.${s.component}`);
    if (isOpen) {
      backdrop?.classList.add(s.isOpen);
    } else {
      backdrop?.classList.remove(s.isOpen);
    }
  }, [isOpen]);

  return null;
};

export const Backdrop = memo(BackdropBase);
