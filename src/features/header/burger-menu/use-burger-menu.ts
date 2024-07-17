import { useClickOutside } from '@/shared/hooks/use-click-outside';
import { useToggle } from '@/shared/hooks/use-toggle';
import { useRef } from 'react';

export const useBurgerMenu = () => {
  const ref = useRef(null);
  const [isOpen, toggle, setIsOpen] = useToggle();
  useClickOutside(ref, () => isOpen && setIsOpen(false));

  return { isOpen, toggle, ref };
};
