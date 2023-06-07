import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as S from './Label.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Label = ({ className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className={clsx([S.LabelBasic, className])} {...props}>
      {children}
    </div>
  );
};
