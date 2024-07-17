'use client';

import { FC, HTMLProps } from 'react';
import s from './tabs.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export type TabType = { label: string; href: string };

interface Props extends HTMLProps<HTMLUListElement> {
  activeTab?: string;
  tabs: TabType[];
  optionClassname?: string;
  activeOptionClassname?: string;
}

export const LinkedTabs: FC<Props> = (props) => {
  const { tabs, optionClassname, className, activeOptionClassname, activeTab, ...other } = props;

  return (
    <ul className={cn(s.component, className)} {...other}>
      {tabs.map(({ label, href }) => {
        const isActive = activeTab === href;

        return (
          <Link
            key={label}
            href={href}
            className={cn(s.option, optionClassname, isActive && activeOptionClassname)}
          >
            {label}
          </Link>
        );
      })}
    </ul>
  );
};
