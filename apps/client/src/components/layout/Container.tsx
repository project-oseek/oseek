import React, { HTMLAttributes } from 'react';

type Props = {
  padding?: string | number;
} & HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, padding = 16, ...props }: Props) => {
  return (
    <div style={{ padding }} {...props}>
      {children}
    </div>
  );
};
