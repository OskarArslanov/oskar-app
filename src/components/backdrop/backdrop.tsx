import { FC, memo, useEffect } from 'react';
import s from './backdrop.module.scss';

interface Props {
  isOpen: boolean;
  id: string;
}

const BackdropBase: FC<Props> = ({ isOpen, id }) => {
  const backdropId = `backdrop-${id}`;
  useEffect(() => {
    const backdrop = document.createElement('div');
    backdrop.className = s.component;
    backdrop.id = backdropId;
    document.body.append(backdrop);

    return () => {
      backdrop.remove();
    };
  }, [backdropId]);

  useEffect(() => {
    const backdrop = document.getElementById(backdropId);
    if (isOpen) {
      backdrop?.classList.add(s.isOpen);
    } else {
      backdrop?.classList.remove(s.isOpen);
    }
  }, [backdropId, isOpen]);

  return null;
};

export const Backdrop = memo(BackdropBase);
