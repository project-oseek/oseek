'use client';

import { TextToggle } from '@oseek/ui';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { useGetFoodKeyword } from '@queries/code';
import { CodeResDto } from '@oseek/apis';
import { MAX_FOOD_KEYWORD_LENGTH } from '@constant/foodKeyword';
import { LoginHeading } from '../../login/LoginHeading';
import { BodySection, BottomSheet, ContentSection } from '../../section';

type Props = {
  onSubmit: () => void;
  submitText: string;
};

export const SettingKeyword = ({ onSubmit, submitText }: Props) => {
  const [selectedKeywordCodes, setSelectedKeywordCodes] = createLoginSettingSlice((state) => [state.selectedKeywordCodes, state.setSelectedKeywordCodes]);
  const { data: responseFoodKeywords } = useGetFoodKeyword();

  const getMappedFoodKeywords = (foodKeywords?: CodeResDto[]) => {
    if (!Array.isArray(foodKeywords)) {
      return [];
    }
    return foodKeywords.map((keyword) => ({
      emoji: '🥘', // FIXME: emoji
      text: keyword.codeName,
      code: keyword.code,
    }));
  };

  const mappedKeywords = getMappedFoodKeywords(responseFoodKeywords || []);

  const handleKeywordClick = (code: string) => {
    const isSelectedFoodKeyword = selectedKeywordCodes.includes(code);

    if (isSelectedFoodKeyword) {
      setSelectedKeywordCodes(selectedKeywordCodes.filter((selectedKeyword) => selectedKeyword !== code));
      return;
    }

    if (selectedKeywordCodes.length >= MAX_FOOD_KEYWORD_LENGTH && !isSelectedFoodKeyword) {
      alert('최대 5개까지 선택 가능해요.');
      return;
    }

    setSelectedKeywordCodes([...selectedKeywordCodes, code]);
  };

  const disabledBottomSheet = selectedKeywordCodes.length === 0;
  return (
    <>
      <BodySection>
        <LoginHeading
          title={
            <>
              제주도에서의 소중한 한 끼,
              <br />
              어떤 점을 중요하게 생각하시나요?
            </>
          }
          description={<>알려주시면 딱 맞는 식당을 추천해 드릴게요.</>}
        />
        <ContentSection>
          {mappedKeywords.map((keyword, index) => {
            const isCheckedFoodKeyword = typeof keyword.code === 'string' && selectedKeywordCodes.includes(keyword.code);
            return (
              <TextToggle
                key={`${keyword.text}+${index}`}
                emoji={keyword.emoji}
                text={keyword.text || ''}
                code={keyword.code || ''}
                checked={isCheckedFoodKeyword}
                onClick={handleKeywordClick}
              />
            );
          })}
        </ContentSection>
      </BodySection>
      <BottomSheet text={submitText} disabled={disabledBottomSheet} onClick={onSubmit} />
    </>
  );
};
