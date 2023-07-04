import { MenuElement } from '@components/shop';
import MenuShopImg from '@components/shop/menu/shop.png';
import { Container } from '@components/layout';
import { Typography } from '@oseek/ui';
import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Menu = () => {
  return (
    <Container padding="0px 0px 24px" style={{ whiteSpace: 'initial' }}>
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} imgSrc={MenuShopImg} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} imgSrc={MenuShopImg} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <MenuElement title="고등어 묵은지찜" description="제주도 애월읍 고등어찜 맛집으로 묵은지와 고등어가 조화를 이루어 일품입니다." price={36000} />
      <Typography as="p" variant="D1" style={{ color: color.gray1, padding: 16 }}>
        메뉴 항목과 가격은 각 매장의 사정에 따라 기재된 내용과 다를 수 있습니다.
      </Typography>
    </Container>
  );
};
