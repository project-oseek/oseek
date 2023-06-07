import Image from 'next/image';

import { Typography } from '@oseek/ui';
import * as S from './ShopCard.css';
import { Label } from '../label';

const Big = () => {
  return (
    <div className={S.BigContainer}>
      <Image src="" alt="식당 사진" height={220} className={S.BigImage} />
      <div className={S.BigInfoContainer}>
        <main>
          <div className={S.BigInfoTitleContainer}>
            <Typography as="span" variant="ST1" className={S.BigInfoTitle}>
              이춘옥 원조 고등어 쌈밥 애월본점
              <Typography as="span" variant="B2" className={S.gray1Color}>
                쌈밥
              </Typography>
            </Typography>
            {/*   Icon */}
          </div>
          <div className={S.BigInfoDetailContainer}>
            <Typography as="span" variant="B2" className={S.subColor}>
              영업전
            </Typography>
            <div className={S.BigDivider} />
            <Typography as="span" variant="ST2" className={S.gray1Color}>
              4.8
            </Typography>
            <div className={S.BigDivider} />
            <Typography as="span" variant="ST2" className={S.gray1Color}>
              480m
            </Typography>
            <div className={S.BigDivider} />
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

export const ShopCard = { Big };
