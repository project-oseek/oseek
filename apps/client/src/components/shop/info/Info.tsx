import { Container } from '@components/layout';
import { Copy, Map, Phone, Store, Time, Typography } from '@oseek/ui';
import { styleToken } from '@oseek/ui/core';
import { Label } from '@components/label';
import * as S from './Info.css';

const { color } = styleToken;

export const Info = () => {
  return (
    <Container padding="22.5px 16px" className={S.Container}>
      <div className={S.InfoElement}>
        <Map color={color.gray1} />
        <div className={S.Detail}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Typography variant="B2" style={{ color: 'black' }}>
              제주 제주시 애월읍 일주서로 7213
            </Typography>
            <Typography variant="D1" style={{ color: color.gray1, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
              <Copy color={color.gray1} />
              주소복사
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Label className={S.Label}>지번</Label>
            <Typography variant="B2" style={{ color: color.gray1 }}>
              제주 제주시 애월읍 일주서로 7213
            </Typography>
          </div>
        </div>
      </div>
      <div className={S.InfoElement}>
        <Phone color={color.gray1} />
        <Typography variant="B2" style={{ color: 'black' }}>
          0507-1402-9914
        </Typography>
      </div>
      <div className={S.InfoElement}>
        <Time color={color.gray1} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12.5, color: color.black }}>
          <Typography variant="ST2" style={{ color: color.primary, display: 'flex', alignItems: 'center', gap: 8 }}>
            영업중
            <Typography variant="B2">9:30 - 21:00</Typography>
          </Typography>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>일</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>월</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>화</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>정기휴무</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>수</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>목</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>금</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
          <div className={S.OpeningElement}>
            <span className={S.Opening}>토</span>
            <div className={S.OpeningDetail}>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
              <span className={S.Opening}>9:30 - 21:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={S.InfoElement}>
        <Store style={{ color: color.gray1 }} />
        <Typography variant="B2" style={{ color: color.black }}>
          단체석, 주차, 포장, 예약, 무선 인터넷, 남/녀 화장실 구분
        </Typography>
      </div>
    </Container>
  );
};
