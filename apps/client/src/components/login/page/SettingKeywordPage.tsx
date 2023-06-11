'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextToggle } from '@oseek/ui';
import { range } from '@oseek/lib';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { LoginHeader, LoginHeading } from '../index';
import { BodySection, ContentSection, BottomSheet } from '../../section';

const SettingKeywordPage = () => {
  const router = useRouter();
  const [keywords, setKeywords] = createLoginSettingSlice((state) => [state.keywords, state.setKeywords]);

  const handleNextClick = () => {
    router.push('/login/setting-location');
  };

  const handleKeywordClick = (n: number) => {
    const data = keywords.map((keyword, index) =>
      index === n
        ? {
            ...keyword,
            checked: !keyword.checked,
          }
        : keyword,
    );
    setKeywords(data);
  };

  return (
    <>
      <LoginHeader visibleRefresh />
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
          {keywords.map((keyword, index) => (
            <TextToggle key={`${keyword.text}+${index}`} index={index} emoji={keyword.emoji} text={keyword.text} checked={keyword.checked} onClick={handleKeywordClick} />
          ))}
        </ContentSection>
      </BodySection>
      <BottomSheet onClick={handleNextClick} />
    </>
  );
};

export default SettingKeywordPage;
