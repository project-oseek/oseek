'use client';

import React from 'react';
import Image from 'next/image';

import * as S from './MenuCategory.css';
import { Typography } from '@oseek/ui';
import Asian from './images/asian.png';
import Cafe from './images/cafe.png';
import Japanese from './images/japanese.png';
import Korean from './images/korean.png';
import Western from './images/western.png';

export const MenuCategory = () => {
  return (
    <div className={S.Container}>
      <div className={S.Category}>
        <Image src={Korean} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">한식</Typography>
      </div>
      <div className={S.Category}>
        <Image src={Western} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">양식</Typography>
      </div>
      <div className={S.Category}>
        <Image src={Japanese} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">일식</Typography>
      </div>
      <div className={S.Category}>
        <Image src={Asian} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">한식</Typography>
      </div>
      <div className={S.Category}>
        <Image src={Cafe} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">카페/디저트</Typography>
      </div>
    </div>
  );
};
