import { Container } from '@components/layout';
import { styleToken } from '@oseek/ui/core';
import { Favorite, Typography } from '@oseek/ui';
import { Label } from '@components/label';
import { ReviewCard } from './ReviewCard';
import * as S from './Review.css';

const { color } = styleToken;

export const Review = () => {
  return (
    <Container padding="24px 0px" className={S.Container}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div className={S.Summary}>
          <Favorite color={color.primary} />
          <div style={{ display: 'flex', columnGap: 8, rowGap: 10, flexWrap: 'wrap', alignItems: 'center', flex: 1 }}>
            <Label className={S.Label}>#음식이 맛있어요</Label>
            <Label className={S.Label}>#뷰가 좋아요</Label>
            <Label className={S.Label}>#재료가 신선해요</Label>
            <Label className={S.Label}>#매장이 넓어요</Label>
            <Label className={S.Label}>#친절해요</Label>
          </div>
        </div>
        <div className={S.Summary} style={{ alignItems: 'center' }}>
          <Favorite color={color.primary} />
          <Typography variant="B2" style={{ color: '#000' }}>
            4.8 (294)
          </Typography>
        </div>
        <div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard noBorder />
        </div>
      </div>
    </Container>
  );
};
