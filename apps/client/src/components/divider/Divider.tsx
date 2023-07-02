import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import * as S from './Divider.css';

type Props = {
  type?: 'horizontal' | 'vertical';
} & HTMLAttributes<HTMLDivElement>;

export const Divider = ({ type = 'vertical', className, ...props }: Props) => {
  return <div className={clsx([S.DividerBasic, S.DividerTypeStyle[type], className])} {...props} />;
};
