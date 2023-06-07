import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import * as S from './Divider.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Divider = ({ className, ...props }: Props) => {
  return <div className={clsx([S.DividerBasic, className])} {...props} />;
};
