'use client';

import React, { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import xor from 'lodash-es/xor';
import clsx from 'clsx';

import { ChevronDown, COLOR_PROPERTIES, Typography } from '@oseek/ui';
import { ShopCardBig } from '../../card';
import { Label } from '../../label';
import * as S from './RecommendCategory.css';

export const RecommendCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleQuery = (query: string) => {
    let keywordList = searchParams.getAll('keyword');
    keywordList = xor(keywordList, [query]);

    const nextQuery = queryString.stringify({ keyword: keywordList }, { arrayFormat: 'none' });

    router.replace(`${pathname}?${nextQuery}`);
  };

  const checkLabelActive = useCallback(
    (keyword: string) => {
      const keywordList = searchParams.getAll('keyword');
      return keywordList.includes(keyword);
    },
    [searchParams],
  );

  return (
    <div className={S.Container}>
      <div className={S.CategoryContainer}>
        <Label className={S.Label}>
          <Typography variant="B2">추천순</Typography>
          <ChevronDown color={COLOR_PROPERTIES.gray1} />
        </Label>
        <Label
          className={clsx([S.Label, checkLabelActive('more') && S.ActiveLabel])}
          onClick={() => {
            handleQuery('more');
          }}
        >
          <Typography variant="B2">저장 많은</Typography>
        </Label>
        <Label
          className={clsx([S.Label, checkLabelActive('hot') && S.ActiveLabel])}
          onClick={() => {
            handleQuery('hot');
          }}
        >
          <Typography variant="B2">요즘 뜨는</Typography>
        </Label>
        <Label
          className={clsx([S.Label, checkLabelActive('takeout') && S.ActiveLabel])}
          onClick={() => {
            handleQuery('takeout');
          }}
        >
          <Typography variant="B2">테이크 아웃</Typography>
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
