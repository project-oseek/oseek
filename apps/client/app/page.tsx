import React from 'react';

import * as S from './page.css';
import { Container, Intro, MainLayout, Menu, MenuCategory, Preview, Recommend } from '../src/components';

const IndexPage = ({ params }: { params: string }) => {
  console.log(params);
  return (
    <MainLayout activePath="/">
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
