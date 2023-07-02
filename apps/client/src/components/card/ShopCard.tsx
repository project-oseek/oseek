'use client';

import Image from 'next/image';

import { Favorite, Typography, COLOR_PROPERTIES, Like } from '@oseek/ui';
import * as S from './ShopCard.css';
import { Label } from '../label';
import { Divider } from '../divider';
import ShopImg from './shop.png';
import { useRouter } from 'next/navigation';

export const ShopCardBig = () => {
  const router = useRouter();

  return (
    <div
      className={S.BigContainer}
      onClick={() => {
        router.push('/shop/22');
      }}
    >
      <Image src={ShopImg} alt="식당 사진" width={100} height={220} className={S.BigImage} />
      <div className={S.BigInfoContainer}>
        <main>
          <div className={S.BigInfoTitleContainer}>
            <Typography as="span" variant="ST1" className={S.BigInfoTitle}>
              이춘옥 원조 고등어 쌈밥 애월본점
              <Typography as="span" variant="B2" className={S.gray1Color}>
                쌈밥
              </Typography>
            </Typography>
            <Like color={COLOR_PROPERTIES.gray1} />
          </div>
          <div className={S.BigInfoDetailContainer}>
            <Typography as="span" variant="B2" className={S.subColor}>
              영업전
            </Typography>
            <Divider />
            <Favorite color={COLOR_PROPERTIES.primary} style={{ marginRight: 6 }} />
            <Typography as="span" variant="ST2" className={S.gray1Color}>
              4.8
            </Typography>
            <Divider />
            <Typography as="span" variant="ST2" className={S.gray1Color}>
              480m
            </Typography>
            <Divider />
            <Typography as="span" variant="B2" className={S.BigAverage}>
              평균
              <Typography as="span" variant="ST2">
                14,000원
              </Typography>
            </Typography>
          </div>
          <div className={S.LabelContainer}>
            <Label>고등어 묵은지찜</Label>
            <Label>고등어 묵은지찜</Label>
            <Label>고등어 묵은지찜</Label>
          </div>
        </main>
      </div>
    </div>
  );
};

export const ShopCardSmall = () => {
  return (
    <div className={S.SmallContainer}>
      <Image src={ShopImg} alt="식당 사진" width={100} height={120} className={S.SmallImage} />
      <main className={S.SmallTitleContainer}>
        <Typography variant="ST1">꽃길 국수</Typography>
        <Typography variant="B2" className={S.gray1Color}>
          한식
        </Typography>
      </main>
      <div className={S.SmallInfoContainer}>
        <Favorite color={COLOR_PROPERTIES.primary} className={S.Favorite} />
        <Typography variant="ST2" className={S.gray1Color}>
          4.8
        </Typography>
        <Divider />
        <Typography variant="B2" className={S.gray1Color}>
          480m
        </Typography>
      </div>
    </div>
  );
};
