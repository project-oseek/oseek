import { ChevronDown, COLOR_PROPERTIES, Map, Typography } from '@oseek/ui';
import { Container, Intro, MainLayout, Category, Preview, Recommend } from '../src/components';
import * as S from './page.css';

const { primary, black } = COLOR_PROPERTIES;

const IndexPage = async () => {
  return (
    <MainLayout
      activePath="/"
      leftAction={
        <div className={S.LeftAction}>
          <Map color={black} />
          <Typography variant="ST1">애월읍</Typography>
          <ChevronDown color={primary} />
        </div>
      }
    >
      <Intro />
      <Container padding="24px 16px" className={S.Container}>
        <Preview />
        <Category />
        <Recommend />
      </Container>
    </MainLayout>
  );
};

export default IndexPage;
