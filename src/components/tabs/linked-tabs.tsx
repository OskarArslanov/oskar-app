import { FC, HTMLProps } from 'react';
import s from './tabs.module.scss';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLUListElement> {
  tabs: { label: string; href: string }[];
  optionClassname?: string;
}

export const LinkedTabs: FC<Props> = (props) => {
  const { tabs, optionClassname, className, ...other } = props;

  return (
    <ul className={cn(s.component, className)} {...other}>
      {tabs.map(({ label, href }) => (
        <Link key={label} href={href} className={cn(s.option, optionClassname)}>
          {label}
        </Link>
      ))}
    </ul>
  );
};
