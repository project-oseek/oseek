'use client';

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Crosshair, IconButton, Search, styleToken, TextField, Typography } from '@oseek/ui';
import { LoginHeader, LoginHeading } from '../index';
import { BodySection, BottomSheet, ContentSection } from '../../section';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';

const SettingKeywordPage = () => {
  const router = useRouter();

  const [coords, setCoords] = createLoginSettingSlice((state) => [state.coords, state.setCoords]);
  const disabledBottomSheet = coords === null;

  const handleSearchGeoLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords({
          latitude: coords.latitude,
          longitude: coords.longitude,
          location: `${coords.latitude}, ${coords.longitude}`,
        });
      },
      (error) => {
        console.error('geoLocation Error:', error);
      },
    );
  };

  const handleNextClick = () => {
    router.push('/login/setting-match');
  };

  return (
    <>
      <LoginHeader visibleRefresh />
      <BodySection>
        <LoginHeading title={<>지금 보고 있는 지역은</>} />
        <ContentSection>
          <TextField
            id="nick"
            label="지역"
            value={coords?.location || ''}
            maxLength={12}
            placeholder=""
            action={<IconButton icon={<Search width={24} height={24} color={styleToken.color.black} />} style={{ border: 'unset' }} />}
            focus
            readOnly
          />

          <Button buttonType="Line" style={{ marginTop: '12px' }} onClick={handleSearchGeoLocationClick}>
            <Crosshair width={24} height={24} color={styleToken.color.black} style={{ display: 'inline-block' }} />
            <Typography as="span" variant="ST1" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
              현재 위치로 주소 찾기
            </Typography>
          </Button>
        </ContentSection>
      </BodySection>
      <BottomSheet onClick={handleNextClick} disabled={disabledBottomSheet} />
    </>
  );
};

export default SettingKeywordPage;
