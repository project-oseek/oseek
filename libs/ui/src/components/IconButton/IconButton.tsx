import React, { HTMLAttributes, PropsWithChildren, ReactElement} from 'react';

import { Button } from "../Button";
import * as S from './IconButton.css';

type ButtonProps = {
  size?: string;
  icon: ReactElement;
  align?: 'left' | 'center' | 'right';
  padding?: string;
}

type Props = ButtonProps & HTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  size = 'auto',
  icon,
  align = 'center',
  padding = '0',
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Button
      className={S.rootContainer}
      style={{ width: size, height: size, textAlign: align, padding }}
      {...props}
    >
      {icon}
    </Button>
  );
};
