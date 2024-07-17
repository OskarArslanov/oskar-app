import { useToggle } from '@/shared/hooks/use-toggle';

export const useBurgerMenu = () => {
  const [isOpen, toggle, setIsOpen] = useToggle();

  return { isOpen, toggle, setIsOpen};
};
