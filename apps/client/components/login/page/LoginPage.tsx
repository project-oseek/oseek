import { Button, SnsKakako } from '@oseek/ui';
import React from 'react';
import Image from 'next/image';

import * as S from './LoginPage.css';
import { kakaoIcon } from './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Image className={S.logo} src="/images/login-logo.png" width={208} height={84} alt="로고 이미지" />
      <div className={S.buttonGropContaier}>
        <Button className={S.kakaoButton}>
          <SnsKakako className={S.kakaoIcon} width={24} height={24} />
          <span>카카오로 시작하기</span>
        </Button>
        <Button buttonType="Line">비회원으로 시작하기</Button>
      </div>
    </>
  );
};

export default LoginPage;
