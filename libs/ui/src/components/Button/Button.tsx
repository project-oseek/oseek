import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { ButtonType } from './Button.css';
import * as S from './Button.css';

type Props = {
  buttonType?: ButtonType;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ buttonType = '', children, className, ...props }: PropsWithChildren<Props>) => {
  return (
    <button className={clsx([S.ButtonStyle, S.ButtonTypeStyle[buttonType], className])} {...props}>
      {children}
    </button>
  );
};
