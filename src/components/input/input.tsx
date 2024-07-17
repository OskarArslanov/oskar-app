import { forwardRef, HTMLProps, memo, PropsWithChildren, ReactNode } from 'react';
import s from './input.module.scss';
import cn from 'classnames';
import { SizeType } from '@/types/props';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'size'>, PropsWithChildren {
  size?: SizeType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  fullWidth?: boolean;
}

export const InputBase = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    startAdornment,
    endAdornment,
    size = 'md',
    fullWidth = false,
    className,
    ...other
  } = props;

  const classnames = cn(s.input, s[size], fullWidth && s.fullWidth, className);

  if (startAdornment || endAdornment) {
    return (
      <div className={s.component}>
        {startAdornment}
        <input ref={ref} {...other} className={classnames} />
        {endAdornment}
      </div>
    );
  }

  return <input ref={ref} {...other} className={classnames} />;
});

export const Input = memo(InputBase);
