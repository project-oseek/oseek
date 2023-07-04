'use client';

import { useRouter } from 'next/navigation';

import { IconButton, ArrowLeft, Home, COLOR_PROPERTIES } from '@oseek/ui';
import { MainLayout } from '@components/layout';
import { ShopMain } from '@components/shop';
import { Divider } from '@components/divider';
import { Selection } from '@components/shop';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const router = useRouter();

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
      <ShopMain />
      <Selection />
    </MainLayout>
  );
}
