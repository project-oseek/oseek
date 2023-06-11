import React from 'react';
import { Typography } from '@oseek/ui';
import { MenuCategory } from './MenuCategory';

export const Menu = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <Typography variant="H2">음식 종류별 맛집</Typography>
      <MenuCategory />
    </div>
  );
};
