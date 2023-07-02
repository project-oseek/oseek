'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft, IconButton } from '@oseek/ui';
import { MainLayout, Container, ShopCardBig } from '../../../src/components';
import * as S from './page.css';

const CUISINE_TYPE = {
  korean: '한식',
  western: '양식',
  japanese: '일식',
  asian: '아시안',
  'cafe-dessert': '까페/디저트',
} as const;

type Props = {
  params: {
    type: keyof typeof CUISINE_TYPE;
  };
};

export default function Page({ params }: Props) {
  const TITLE = CUISINE_TYPE[params.type] ?? CUISINE_TYPE.korean;
  const router = useRouter();

  return (
    <MainLayout
      title={TITLE}
      leftAction={
        <IconButton
          icon={<ArrowLeft color="#000" />}
          onClick={() => {
            router.back();
          }}
        />
      }
    >
      <Container padding="24px 16px" className={S.Container}>
        <div className={S.CuisineContainer}>
          <ShopCardBig />
          <ShopCardBig />
          <ShopCardBig />
          <ShopCardBig />
          <ShopCardBig />
          <ShopCardBig />
        </div>
      </Container>
    </MainLayout>
  );
}
