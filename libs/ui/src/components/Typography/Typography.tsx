import { ElementType, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as S from './Typography.css';
import { VariantKeyType } from './Typography.css';

type Props = {
  as?: ElementType;
  variant?: S.VariantKeyType;
} & HTMLAttributes<HTMLElement>;

export const Typography = ({ as: Tag = 'span', children, variant = 'H1', className, ...props }: PropsWithChildren<Props>) => {
  return (
    <Tag className={clsx([S.VARIANTS[variant], className])} {...props}>
      {children}
    </Tag>
  );
};
