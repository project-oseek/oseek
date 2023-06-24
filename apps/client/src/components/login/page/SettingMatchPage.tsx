'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { memberApi, memberFoodKeywordApi } from '@oseek/apis';
import { LOCATION_KEY, NICKNAME_KEY, setLocalStorageItem } from '@oseek/lib';
import { LoginHeader } from '../LoginHeader';
import { BodySection, ContentSection } from '../../section';
import { LoginHeading } from '../LoginHeading';

export const SettingMatchPage = () => {
  const router = useRouter();
  const [name, selectedKeywordCodes, location] = createLoginSettingSlice((state) => [state.name, state.selectedKeywordCodes, state.location]);

  const requestUserSetting = async () => {
    const foodKeywords = selectedKeywordCodes.map((foodKeyword) => ({ foodKeyword }));

    try {
      const { data: responseMember } = await memberApi.modifyMemberInfoAxios({ location, nickname: name });
      if (!responseMember) {
        throw new Error('회원 정보 수정 실정에 실패했습니다.');
      }
      setLocalStorageItem(NICKNAME_KEY, responseMember.nickname);
      setLocalStorageItem(LOCATION_KEY, responseMember.location);
      await memberFoodKeywordApi.saveMemberFoodKeywordAxios(foodKeywords);
    } catch (e) {
      console.error(e);
    } finally {
      router.replace('/');
    }
  };

  useEffect(() => {
    if (!name || selectedKeywordCodes.length === 0 || !location) {
      router.replace('/login/setting-name');
      return;
    }
    requestUserSetting();
  }, [name, selectedKeywordCodes, location]);

  const titleMessage = (
    <>
      {name} 님
      <br />
      작성해주신 내용을 기반으로
      <br />
      식당을 찾고 있어요
    </>
  );

  return (
    <>
      <LoginHeader visibleRefresh />
      <BodySection>
        <LoginHeading title={titleMessage} />
        <ContentSection>
          <div style={{ width: '240px', height: '240px', backgroundColor: '#ffe6e6', margin: '34px auto 0' }} />
        </ContentSection>
      </BodySection>
    </>
  );
};
