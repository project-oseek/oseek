'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { BodySection, ContentSection } from '../../section';
import { LoginHeader } from '../LoginHeader';
import { LoginHeading } from '../LoginHeading';

export const SettingMatchPage = () => {
  const router = useRouter();
  const [name] = createLoginSettingSlice((state) => [state.name]);

  return (
    <>
      <LoginHeader visibleRefresh />
      <BodySection>
        <LoginHeading
          title={
            <>
              {name} 님
              <br />
              작성해주신 내용을 기반으로
              <br />
              식당을 찾고 있어요
            </>
          }
        />
        <ContentSection>
          <div style={{ width: '240px', height: '240px', backgroundColor: '#ffe6e6', margin: '34px auto 0' }} />
        </ContentSection>
      </BodySection>
    </>
  );
};
