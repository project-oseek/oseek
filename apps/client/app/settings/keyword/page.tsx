'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, COLOR_PROPERTIES, IconButton } from '@oseek/ui';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { memberFoodKeywordApi } from '@oseek/apis';
import { MainLayout } from '../../../src/components';
import { SettingKeyword } from '../../../src/components/settings';

const KeywordPage = () => {
  const router = useRouter();
  const selectedKeywordCodes = createLoginSettingSlice((state) => state.selectedKeywordCodes);

  const handleSubmit = async () => {
    const foodKeywords = selectedKeywordCodes.map((foodKeyword) => ({ foodKeyword }));
    await memberFoodKeywordApi.saveMemberFoodKeywordAxios(foodKeywords);
  };

  const handlePreviousPage = () => router.back();

  return (
    <MainLayout
      title="취향설정"
      activePath="/settings"
      leftAction={<IconButton icon={<ArrowLeft color={COLOR_PROPERTIES.black} />} onClick={handlePreviousPage} />}
      rightAction={<div />}
    >
      <SettingKeyword onSubmit={handleSubmit} submitText="저장" />
    </MainLayout>
  );
};

export default KeywordPage;
