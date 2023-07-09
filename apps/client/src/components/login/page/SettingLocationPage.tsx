'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Crosshair, IconButton, Search, styleToken, TextField, Typography } from '@oseek/ui';
import { locationAPI, LocationResDto } from '@oseek/apis';
import { useGetLocation } from '@queries/code/useGetLocation.get';
import { LocationList } from '@components/location';
import createLoginSettingSlice from '@store/slices/createLoginSettingSlice';
import { getCheckLocationJeju } from '@oseek/lib';
import { LoginHeader } from '../LoginHeader';
import { BodySection, ContentSection, BottomSheet } from '../../section';
import { LoginHeading } from '../LoginHeading';

import * as S from './SettingLocationPage.css';

export const SettingLocationPage = () => {
  const router = useRouter();

  const [location, setLocation] = createLoginSettingSlice((state) => [state.location, state.setLocation]);
  const { data: responseLocation } = useGetLocation();
  const locations = responseLocation.map((location) => `제주 ${location.codeName}`);

  const handleLocationInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocation(e.target.value);
    },
    [setLocation],
  );

  const processGeolocation = async (potison: GeolocationPosition) => {
    const { coords } = potison;
    const currentLocation = await locationAPI.findMemberLocationDetailAxios(coords.latitude, coords.longitude);

    const regionName = `${currentLocation.data?.region_1depth_name} ${currentLocation.data?.region_2depth_name} ${currentLocation.data?.region_3depth_name}`;
    const isJeju = getCheckLocationJeju(regionName);

    if (!regionName || !isJeju) {
      alert('현재 위치가 제주가 아닙니다. 아래 지역을 선택해주세요.');
      return;
    }

    setLocation(regionName);
  };

  const handleGeoLocationError = (error: GeolocationPositionError) => {
    console.error('geoLocation Error:', error);
    alert('사용자 위치 정보가 올바르지 않습니다. 아래 지역을 선택해주세요.');
  };

  const handleSearchGeoLocationClick = () => {
    navigator.geolocation.getCurrentPosition(processGeolocation, handleGeoLocationError);
  };

  const handleNextClick = useCallback(() => {
    router.push('/login/setting-match');
  }, [router]);

  const handleLocationClick = useCallback(
    (location: string) => {
      setLocation(location);
      handleNextClick();
    },
    [handleNextClick, setLocation],
  );

  const disabledBottomSheet = !getCheckLocationJeju(location);

  return (
    <>
      <LoginHeader visibleRefresh />
      <BodySection className={S.overflowHidden}>
        <LoginHeading title={<>지금 보고 있는 지역은</>} />
        <ContentSection>
          <TextField
            id="nick"
            label="지역"
            value={location}
            maxLength={12}
            placeholder="동명(읍,면)으로 검색 (Ex. 용담이동)"
            action={<IconButton icon={<Search width={24} height={24} color={styleToken.color.black} />} style={{ border: 'unset' }} />}
            onChange={handleLocationInputChange}
            focus
          />

          <Button buttonType="Line" style={{ marginTop: '12px' }} onClick={handleSearchGeoLocationClick}>
            <Crosshair width={24} height={24} color={styleToken.color.black} style={{ display: 'inline-block' }} />
            <Typography as="span" variant="ST1" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
              현재 위치로 주소 찾기
            </Typography>
          </Button>

          <LocationList keyword={location} locations={locations} onLocationClick={handleLocationClick} />
        </ContentSection>
      </BodySection>
      <BottomSheet text="다음" onClick={handleNextClick} disabled={disabledBottomSheet} />
    </>
  );
};
