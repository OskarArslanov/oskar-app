'use client';

import { SizeType } from '@/types/props';
import { Input } from '../input/input';
import s from './select.module.scss';
import cn from 'classnames';
import { FC, memo } from 'react';
import { ArrowIcon } from '../../assets/svg/arrow';
import { useSelect } from './use-select';

interface Props {
  options?: string[];
  size?: SizeType;
  value?: string;
  onSelect?: (value: string) => void;
  inputClassname?: string;
  closeOnSelect?: boolean;
}

const SelectBase: FC<Props> = (props) => {
  const { options, size = 'md', onSelect, value = '', inputClassname, closeOnSelect } = props;
  const { open, containerRef, inputRef, optionsRef, toggleOpen } = useSelect();

  return (
    <div className={s.component} ref={containerRef}>
      <Input
        size={size}
        endAdornment={
          <ArrowIcon className={cn(s.arrow, s[size], { [s.open]: open })} onClick={toggleOpen} />
        }
        ref={inputRef}
        onClick={toggleOpen}
        readOnly
        value={value}
        className={cn(s.input, inputClassname)}
      />
      <ul className={cn(s.options, { [s.open]: open })} ref={optionsRef}>
        {options?.map((option) => (
          <li
            key={option}
            className={s.option}
            onClick={() => {
              closeOnSelect && toggleOpen();
              onSelect?.(option);
            }}
          >
            {option}
          </li>
        )) || <li className={s.empty}>No options</li>}
      </ul>
    </div>
  );
};

export const Select = memo(SelectBase);
