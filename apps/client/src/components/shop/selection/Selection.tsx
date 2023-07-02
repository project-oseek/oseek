'use client';

import React, { useRef, useState } from 'react';
import clsx from 'clsx';

import { Container } from '@components/layout';
import { Button } from '@oseek/ui';
import { Menu } from '@components/shop';
import * as S from './Selection.css';

const SelectionArray = [<Menu />, <Menu />, <Menu />];

export const Selection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabLeft = (index: number) => {
    setCurrentIndex(index);
    tabRef.current.style.left = `${(100 / 3) * index}%`;
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
          className={clsx([S.Button, , currentIndex === 1 && S.Active])}
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
