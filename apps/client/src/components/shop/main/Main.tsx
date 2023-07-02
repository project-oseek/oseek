import Image from 'next/image';

import { Container } from '@components/layout';
import { COLOR_PROPERTIES, Favorite, Like, Map, Share, Typography } from '@oseek/ui';
import { Action, Menu } from '@components/shop';
import { Divider } from '@components/divider';
import * as S from './Main.css';
import ShopImg from './shop.png';
import MenuShopImg from '../menu/shop.png';

export const ShopMain = () => {
  return (
    <div>
      {/* Carousel을 위한 container 하나 추가 */}
      <Image src={ShopImg} width={100} height={220} alt="식당 이름" style={{ width: '100%' }} />
      {/* Carousel을 위한 container 하나 추가 */}
      <Container padding="20px 30px 24px" className={S.Container}>
        <Typography variant="H2" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          이춘옥 원조 고등어 쌈밥 애월본점
          <Typography variant="B2" style={{ color: COLOR_PROPERTIES.gray1 }}>
            쌈밥
          </Typography>
        </Typography>
        <div className={S.ActionContainer}>
          <Action icon={<Favorite color={COLOR_PROPERTIES.primary} />} title="저장하기" />
          <Divider style={{ height: 24 }} />
          <Action icon={<Like color={COLOR_PROPERTIES.black} />} title="저장하기" />
          <Divider style={{ height: 24 }} />
          <Action icon={<Share color={COLOR_PROPERTIES.black} />} title="공유하기" />
          <Divider style={{ height: 24 }} />
          <Action icon={<Map color={COLOR_PROPERTIES.black} />} title="지도보기" />
        </div>
      </Container>
      <Divider type="horizontal" style={{ backgroundColor: COLOR_PROPERTIES.coolGray }} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} imgSrc={MenuShopImg} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} imgSrc={MenuShopImg} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <Menu title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
    </div>
  );
};
