import * as S from './Preview.css';
import { Container } from '../../layout';
import { ShopCardSmall } from '../../card';

export const Preview = () => {
  return (
    <Container padding={0} className={S.Container}>
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
      <ShopCardSmall />
    </Container>
  );
};
