import React from 'react';
import Image from 'next/image';
import { Button, SnsKakao } from '@oseek/ui';

import * as S from './LoginPage.css';

export const LoginPage = () => (
  <>
    <Image className={S.logo} src="/images/login-logo.png" width={208} height={84} alt="로고 이미지" />
    <div className={S.buttonGropContaier}>
      <Button className={S.kakaoButton}>
        <SnsKakao className={S.kakaoIcon} width={24} height={24} />
        <span>카카오로 시작하기</span>
      </Button>
      <Button buttonType="Line">비회원으로 시작하기</Button>
    </div>
  </>
);
