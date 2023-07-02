'use client';

import { useRouter } from 'next/navigation';
import { AppBar, ArrowLeft, IconButton, Refresh, styleToken } from '@oseek/ui';

import * as S from './LoginHeader.css';

type Props = {
  visibleRefresh?: boolean;
};

export const LoginHeader = ({ visibleRefresh }: Props) => {
  const router = useRouter();

  const handlePrev = () => {
    router.back();
  };

  return (
    <header className={S.container}>
      <AppBar
        leftAction={<IconButton icon={<ArrowLeft color={styleToken.color.black} />} onClick={handlePrev} />}
        rightAction={visibleRefresh ? <IconButton icon={<Refresh color={styleToken.color.black} />} /> : undefined}
      />
    </header>
  );
};
