'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { IconButton, ArrowLeft, Home, COLOR_PROPERTIES } from '@oseek/ui';
import { MainLayout } from '@components/layout';
import ShopImg from './shop.png';
import * as S from './page.css';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const router = useRouter();
  console.log(params.id);
  // console.log(S);

  return (
    <MainLayout
      leftAction={
        <IconButton
          icon={<ArrowLeft color={COLOR_PROPERTIES.black} />}
          onClick={() => {
            router.back();
          }}
        />
      }
      rightAction={
        <IconButton
          icon={<Home color={COLOR_PROPERTIES.black} />}
          onClick={() => {
            router.push('/');
          }}
        />
      }
    >
      <div>
        <Image src={ShopImg} width={100} height={220} alt="식당 이름" style={{ width: '100%' }} />
      </div>
    </MainLayout>
  );
}
