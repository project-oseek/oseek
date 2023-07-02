import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@oseek/ui';
import * as S from './CategoryList.css';
import Asian from './images/asian.png';
import Cafe from './images/cafe.png';
import Japanese from './images/japanese.png';
import Korean from './images/korean.png';
import Western from './images/western.png';

const generatePath = (path: string) => {
  return `/category/${path}`;
};

export const CategoryList = () => {
  return (
    <div className={S.Container}>
      <Link className={S.Category} href={generatePath('korean')}>
        <Image src={Korean} alt="category" width={96} height={96} />
        <Typography variant="B1">한식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('western')}>
        <Image src={Western} alt="category" width={96} height={96} />
        <Typography variant="B1">양식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('japanese')}>
        <Image src={Japanese} alt="category" width={96} height={96} />
        <Typography variant="B1">일식</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('asian')}>
        <Image src={Asian} alt="category" width={96} height={96} />
        <Typography variant="B1">아시안</Typography>
      </Link>
      <Link className={S.Category} href={generatePath('cafe-dessert')}>
        <Image src={Cafe} alt="category" width={96} height={96} />
        <Typography variant="B1">카페/디저트</Typography>
      </Link>
    </div>
  );
};
