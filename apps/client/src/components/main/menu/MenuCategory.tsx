import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Typography } from '@oseek/ui';
import * as S from './MenuCategory.css';
import Asian from './images/asian.png';
import Cafe from './images/cafe.png';
import Japanese from './images/japanese.png';
import Korean from './images/korean.png';
import Western from './images/western.png';

const generatePath = (path: string) => {
  return `/cuisine/${path}`;
};

export const MenuCategory = () => {
  return (
    <div className={S.Container}>
      <Link className={S.Category} href={generatePath('korean')}>
        <Image src={Korean} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">한식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('western')}>
        <Image src={Western} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">양식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('japanese')}>
        <Image src={Japanese} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">일식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('asian')}>
        <Image src={Asian} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">아시안</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('cafe-dessert')}>
        <Image src={Cafe} alt="menu-category" width={96} height={96} />
        <Typography variant="B1">카페/디저트</Typography>
      </Link>
    </div>
  );
};
