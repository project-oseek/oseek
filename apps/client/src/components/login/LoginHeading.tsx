'use client';

import { ReactElement } from 'react';
import { Typography } from '@oseek/ui';

type Props = {
  title: ReactElement;
  description?: ReactElement;
};

export const LoginHeading = ({ title, description }: Props) => {
  return (
    <div style={{ padding: '0 24px', margin: '24px 0 0 0' }}>
      <Typography as="h1" variant="H1">
        {title}
      </Typography>
      {description && (
        <Typography as="p" variant="B2" style={{ marginTop: '8px' }}>
          {description}
        </Typography>
      )}
    </div>
  );
};
