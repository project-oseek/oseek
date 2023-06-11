import React from 'react';

import * as S from './Intro.css';
import { Typography } from '@oseek/ui';
import { Container } from '../../layout';

export const Intro = () => {
  return (
    <Container className={S.Container}>
      <Typography variant="H1">
        김냠냠 님<br /> 점심식사 하셨나요?
      </Typography>
    </Container>
  );
};
