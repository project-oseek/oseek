import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as S from './Button.css';

type Props = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: PropsWithChildren<Props>) => {
  return (
    <button className={clsx([S.ButtonBasicStyle, className])} {...props}>
      {children}
    </button>
  );
};
