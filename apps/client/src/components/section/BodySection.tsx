import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as S from './BodySection.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const BodySection = ({ className, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <section className={clsx([S.container, className])} {...props}>
      {children}
    </section>
  );
};
