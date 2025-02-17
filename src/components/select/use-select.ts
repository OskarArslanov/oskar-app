import { useClickOutside } from '@/shared/hooks/use-click-outside';
import { useToggle } from '@/shared/hooks/use-toggle';
import { useTooltip } from '@/shared/hooks/use-tooltip';
import { useRef } from 'react';

export const useSelect = () => {
  const [open, toggleOpen, setOpen] = useToggle();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  useClickOutside(containerRef, () => setOpen(false));
  useTooltip({ targetRef: inputRef, tooltipRef: optionsRef, pos: 'bottom', tooltipGap: 4 });

  return { inputRef, optionsRef, containerRef, open, toggleOpen };
};
