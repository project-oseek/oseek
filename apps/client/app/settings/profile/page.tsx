'use client';

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, COLOR_PROPERTIES, IconButton, TextField } from '@oseek/ui';
import { BottomSheet, Container, MainLayout, useAuth } from '../../../src/components';
import { memberApi } from '@oseek/apis';
import * as S from './page.css';

const ProfilePage = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');

  const handlePreviousPage = () => router.back();

  const handleTextFieldChange = (setter: Dispatch<SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

  const handleSubmit = async () => {
    try {
      await memberApi.modifyMemberInfoAxios({ nickname, location: user?.location });
      setUser({ ...user, nickname });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setNickname(user?.nickname || '');
  }, [user]);

  return (
    <MainLayout
      title="프로필 수정"
      activePath="/settings"
      leftAction={<IconButton icon={<ArrowLeft color={COLOR_PROPERTIES.black} />} onClick={handlePreviousPage} />}
      rightAction={<div />}
    >
      <Container padding="20px 24px" className={S.Container}>
        <div className={S.ImageContainer}>
          <img className={S.Image} src="/images/thumbnail.png" alt="profile" />
        </div>
        <div className={S.TextFieldContainer}>
          <TextField id="nick" label="닉네임" maxLength={12} value={nickname} onChange={handleTextFieldChange(setNickname)} placeholder="김오식 (최대 N자)" focus />
          <TextField id="description" label="소개글" value={description} onChange={handleTextFieldChange(setDescription)} placeholder="먹는게 제일 좋아" />
        </div>
      </Container>
      <BottomSheet text="저장" disabled={!nickname} onClick={handleSubmit} />
    </MainLayout>
  );
};

export default ProfilePage;
