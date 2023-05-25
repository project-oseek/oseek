import React, { ElementType, HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';
import { VariantKeyType, VARIANTS } from './Typography.css';
/* Hello */
type Props = {
  as?: ElementType;
  variant?: VariantKeyType;
} & HTMLAttributes<HTMLElement>;

export const Typography = ({ as: Tag = 'span', children, variant = 'H1', className, ...props }: PropsWithChildren<Props>) => {
  return (
    <Tag className={clsx([VARIANTS[variant], className])} {...props}>
      {children}
    </Tag>
  );
};
