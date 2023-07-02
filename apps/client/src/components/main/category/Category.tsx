import { Typography } from '@oseek/ui';
import { CategoryList } from './CategoryList';

export const Category = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <Typography variant="H2">음식 종류별 맛집</Typography>
      <CategoryList />
    </div>
  );
};
