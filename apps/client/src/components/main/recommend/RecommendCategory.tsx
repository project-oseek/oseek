'use client';

import React from 'react';

import { ShopCardBig } from '../../card';
import { Label } from '../../label';
import { ChevronDown, COLOR_PROPERTIES, Typography } from '@oseek/ui';
import * as S from './RecommendCategory.css';

export const RecommendCategory = () => {
  return (
    <div className={S.Container}>
      <div className={S.CategoryContainer}>
        <Label className={S.Label}>
          <Typography variant="B2">추천순</Typography>
          <ChevronDown color={COLOR_PROPERTIES.gray1} />
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label className={S.Label}>
          <Typography variant="B2">저장 많은</Typography>
        </Label>
      </div>
      <div className={S.RecommendContainer}>
        <ShopCardBig />
        <ShopCardBig />
        <ShopCardBig />
        <ShopCardBig />
      </div>
    </div>
  );
};
