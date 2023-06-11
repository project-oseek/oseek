import React from 'react';

import * as S from './page.css';
import { Container, Intro, MainLayout, Preview } from '../src/components';

const IndexPage = () => {
  return (
    <MainLayout>
      <Intro />
      <Container padding="24px 16px" className={S.Container}>
        <Preview />
      </Container>
    </MainLayout>
  );
};

export default IndexPage;
