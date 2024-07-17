import { FC, HTMLProps } from 'react';
import s from './tabs.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props extends HTMLProps<HTMLUListElement> {
  tabs: { label: string; href: string }[];
  optionClassname?: string;
  activeOptionClassname?: string;
}

export const LinkedTabs: FC<Props> = (props) => {
  const { tabs, optionClassname, className, activeOptionClassname, ...other } = props;
  const segment = useSelectedLayoutSegment() || '';

  return (
    <ul className={cn(s.component, className)} {...other}>
      {tabs.map(({ label, href }) => {
        const isActive = href == segment;

        return (
          <Link
            key={label}
            href={`/` + href}
            className={cn(s.option, optionClassname, isActive && activeOptionClassname)}
          >
            {label}
          </Link>
        );
      })}
    </ul>
  );
};
