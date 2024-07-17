import { PropsWithChildren } from 'react';
import s from './body.module.scss';

export const Body = ({ children }: PropsWithChildren) => {
  return <main className={s.feature}>{children}</main>;
};
