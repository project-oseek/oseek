import Image from 'next/image';

import { Typography } from '@oseek/ui';
import { styleToken } from '@oseek/ui/core';
import { Label } from '@components/label';
import ShopImg from './shop.png';
import * as S from './ReviewCard.css';

const { color } = styleToken;

type Props = {
  noBorder?: boolean;
};

export const ReviewCard = ({ noBorder = false }: Props) => {
  return (
    <div style={{ padding: 16, borderBottom: `1px solid ${noBorder ? 'transparent' : color.gray3}` }}>
      <header className={S.Header}>
        <Typography variant="ST3" style={{ color: '#000' }}>
          김냠냠
        </Typography>
        <Typography variant="D1" style={{ color: color.gray1 }}>
          23.07.02
        </Typography>
      </header>
      <main className={S.Main}>
        <Image width={328} height={160} src={ShopImg} alt="가게" style={{ width: '100%', borderRadius: 8 }} />
        <span className={S.ReviewText}>깔끔하고 음식이 맛있습니다. 사장님이 친절하셔서 기분좋게 먹었어요</span>
      </main>
      <footer className={S.Footer}>
        <Label>#음식이 맛있어요</Label>
        <Label>#매장이 넓어요</Label>
        <Label>#친절해요</Label>
        <Label>+2</Label>
      </footer>
    </div>
  );
};
