import { RefObject, useEffect, useState } from 'react';

export type TooltipPosition = 'left' | 'top' | 'right' | 'bottom';

interface UseTooltipPositionType {
  targetRef: RefObject<HTMLElement>;
  tooltipRef: RefObject<HTMLElement>;
  pos: TooltipPosition;
  tooltipGap: number;
  centred?: boolean;
}

const invert: Record<string, TooltipPosition> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

export const useTooltip = (data: UseTooltipPositionType) => {
  const { targetRef, tooltipRef, pos, tooltipGap, centred } = data;
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition | undefined>(data.pos);

  useEffect(() => {
    const target = targetRef.current;
    const tooltip = tooltipRef.current;

    let position: TooltipPosition | undefined = pos;
    let yPos = 0;
    let xPos = 0;
    let isOutSide = false;
    let iterator = 0;
    const maxIterator = 1;

    if (target && tooltip) {
      const targetRect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const calculatePos = () => {
        if (iterator > maxIterator) {
          position = undefined;
          return;
        }
        if (position === 'left') {
          yPos = targetRect.height / 2 - tooltipRect.height / 2;
          xPos = -tooltipRect.width - tooltipGap;
          isOutSide = xPos > 0;
        }
        if (position === 'top') {
          yPos = -tooltipRect.height - tooltipGap;
          xPos = targetRect.width / 2 - tooltipRect.width / 2;
          isOutSide = yPos > 0;
        }
        if (position === 'right') {
          yPos = targetRect.height / 2 - tooltipRect.height / 2;
          xPos = targetRect.width + tooltipGap;
          isOutSide = xPos + tooltipRect.left + tooltipRect.width > window.innerWidth;
        }
        if (position === 'bottom') {
          yPos = targetRect.height + tooltipGap;
          xPos = targetRect.width / 2 - tooltipRect.width / 2;
          isOutSide = yPos + tooltipRect.height + tooltipRect.top > window.innerHeight;
        }
        if (isOutSide) {
          iterator += 1;
          position = invert[position!];
          calculatePos();
        }
      };
      calculatePos();
      tooltip.style.transform = `translate(${centred ? xPos : 0}px, ${yPos}px)`;
      setTooltipPos(position);
    }
  }, [pos, tooltipGap, data.pos, targetRef, tooltipRef, centred]);

  return tooltipPos;
};
