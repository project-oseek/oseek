import React from 'react';

import * as S from './Recommend.css';
import { Typography } from '@oseek/ui';
import { RecommendCategory } from './RecommendCategory';

export const Recommend = () => {
  return (
    <div className={S.Container}>
      <Typography variant="H2">오늘의 식당 추천 맛집</Typography>
      <RecommendCategory />
    </div>
  );
};
