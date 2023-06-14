'use client';

import React from 'react';
import Image from 'next/image';
import { Button, SnsKakao } from '@oseek/ui';

import { useAlert, useConfirm } from '@oseek/lib';
import * as S from './LoginPage.css';

export const LoginPage = () => {
  const alert = useAlert();
  const confirm = useConfirm();
  const handleAlertClick = async () => {
    alert({ title: '안녕하세요.' }, { closeOnOverlayClick: true });
  };
  const handleConfirmClick = async () => {
    const resultConfirm = await confirm({
      title: '프로필 수정을 그만두시겠어요?',
      description: '작성된 내용을 저장해주세요.',
      submitText: '저장하기',
      closeText: '나가기',
    });
    console.log('resultConfirm', resultConfirm);
  };
  return (
    <>
      <Image className={S.logo} src="/images/login-logo.png" width={208} height={84} alt="로고 이미지" />
      <div className={S.buttonGropContaier}>
        <Button className={S.kakaoButton}>
          <SnsKakao className={S.kakaoIcon} width={24} height={24} />
          <span>카카오로 시작하기</span>
        </Button>
        <Button buttonType="Line" onClick={handleConfirmClick}>
          비회원으로 시작하기
        </Button>
      </div>
    </>
  );
};
