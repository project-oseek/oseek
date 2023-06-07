import React from 'react';

import { Layout } from '@oseek/ui';

import * as S from './page.css';
import { ShopCard } from '../src/components';

const IndexPage = () => {
  return (
    <Layout className={S.layoutStyle}>
      <div
        style={{
          border: '1px solid red',
          flex: 1,
        }}
      >
        <ShopCard.Big />
      </div>
    </Layout>
  );
};

export default IndexPage;
