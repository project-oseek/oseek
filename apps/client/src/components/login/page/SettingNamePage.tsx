'use client';

import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { TextField } from '@oseek/ui';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { LoginHeader } from '../LoginHeader';
import { BodySection, ContentSection, BottomSheet } from '../../section';
import { LoginHeading } from '../LoginHeading';

export const SettingNamePage = () => {
  const router = useRouter();

  const [name, setName] = createLoginSettingSlice((state) => [state.name, state.setName]);
  const disabledBottomSheet = name.length === 0;

  const handleChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNextClick = () => {
    router.push('/login/setting-keyword');
  };

  return (
    <>
      <LoginHeader />
      <BodySection>
        <LoginHeading
          title={
            <>
              오늘의 식당에서 사용할
              <br />
              닉네임이 필요해요.
            </>
          }
          description={<>닉네임은 최대 12자로 설정해주세요</>}
        />
        <ContentSection>
          <TextField id="nick" label="닉네임" value={name} maxLength={12} onChange={handleChangeNickName} placeholder="김오식 (최대 N자)" focus />
        </ContentSection>
      </BodySection>
      <BottomSheet disabled={disabledBottomSheet} onClick={handleNextClick} />
    </>
  );
};
