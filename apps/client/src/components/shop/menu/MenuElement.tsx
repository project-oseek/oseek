import React, { HTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';

import { Container } from '@components/layout';
import { COLOR_PROPERTIES, Typography } from '@oseek/ui';
import * as S from './MenuElement.css';

type Props = { title: ReactElement; description: ReactElement; price: ReactElement; imgSrc?: string } & HTMLAttributes<HTMLDivElement>;

export const MenuElement = ({ title, description, price, imgSrc }: Props) => {
  return (
    <Container padding="20px 16px" className={S.Container}>
      <div className={S.Detail}>
        <Typography variant="ST3">{title}</Typography>
        <Typography variant="D1" style={{ color: COLOR_PROPERTIES.gray1 }}>
          {description}
        </Typography>
        <Typography variant="ST2" style={{ color: COLOR_PROPERTIES.primary }}>
          {price.toLocaleString()}원
        </Typography>
      </div>
      {imgSrc && <Image src={imgSrc} width={80} height={80} alt="가게" className={S.Image} />}
    </Container>
  );
};
