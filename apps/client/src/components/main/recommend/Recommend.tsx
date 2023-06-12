import React from 'react';

import { Typography } from '@oseek/ui';
import { RecommendCategory } from './RecommendCategory';
import * as S from './Recommend.css';

export const Recommend = () => {
  return (
    <div className={S.Container}>
      <Typography variant="H2">오늘의 식당 추천 맛집</Typography>
      <RecommendCategory />
    </div>
  );
};
