import { FC, HTMLProps } from 'react';
import s from './tabs.module.scss';

interface Props extends HTMLProps<HTMLUListElement> {
  tabs: { label: string }[];
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, ...other } = props;

  return (
    <ul className={s.component} {...other}>
      {tabs.map(({ label }) => (
        <li key={label} className={s.option}>{label}</li>
      ))}
    </ul>
  );
};
