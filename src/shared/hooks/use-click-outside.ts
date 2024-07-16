import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement>, cb: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
    
      cb();
    };

    document.addEventListener('mousedown', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, cb]);
};
