import React from 'react';

import { ChevronDown, COLOR_PROPERTIES, IconButton, Map, Typography } from '@oseek/ui';
import { Container, Intro, MainLayout, Menu, Preview, Recommend } from '../src/components';
import * as S from './page.css';

const { primary, black } = COLOR_PROPERTIES;

const IndexPage = async () => {
  return (
    <MainLayout
      activePath="/"
      leftAction={
        <div className={S.LeftAction}>
          <Map color={black} />
          <Typography variant="ST1">애월읍</Typography>
          <ChevronDown color={primary} />
        </div>
      }
    >
      <Intro />
      <Container padding="24px 16px" className={S.Container}>
        <Preview />
        <Menu />
        <Recommend />
      </Container>
    </MainLayout>
  );
};

export default IndexPage;
