'use client';

import { useRef, useState } from 'react';
import clsx from 'clsx';

import { Container } from '@components/layout';
import { Button } from '@oseek/ui';
import { Info } from '@components/shop/info';
import { Menu } from '@components/shop/menu';
import { Review } from '@components/shop/review';
import * as S from './Selection.css';

const SelectionArray = [<Menu />, <Info />, <Review />];

export const Selection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabLeft = (index: number) => {
    setCurrentIndex(index);
    if (tabRef.current) {
      tabRef.current.style.left = `${(100 / 3) * index}%`;
    }
  };

  return (
    <div>
      <Container padding={0} className={S.Container}>
        <Button
          className={clsx([S.Button, currentIndex === 0 && S.Active])}
          onClick={() => {
            handleTabLeft(0);
          }}
        >
          메뉴
        </Button>
        <Button
          className={clsx([S.Button, currentIndex === 1 && S.Active])}
          onClick={() => {
            handleTabLeft(1);
          }}
        >
          정보
        </Button>
        <Button
          className={clsx([S.Button, currentIndex === 2 && S.Active])}
          onClick={() => {
            handleTabLeft(2);
          }}
        >
          리뷰
        </Button>
        <div className={S.Tab} ref={tabRef} />
      </Container>
      {SelectionArray[currentIndex]}
    </div>
  );
};
