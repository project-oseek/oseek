'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, SnsKakao } from '@oseek/ui';

import { generateKakaoLoginUrl } from '@oseek/apis';
import * as S from './LoginPage.css';

export const LoginPage = () => {
  const router = useRouter();
  const handleKakaoLogin = () => {
    const redirectURL = generateKakaoLoginUrl(window.location.origin);
    router.push(redirectURL);
  };
  return (
    <>
      <Image className={S.logo} src="/images/login-logo.png" width={208} height={84} alt="로고 이미지" />
      <div className={S.buttonGropContaier}>
        <Button className={S.kakaoButton} onClick={handleKakaoLogin}>
          <SnsKakao className={S.kakaoIcon} width={24} height={24} />
          <span>카카오로 시작하기</span>
        </Button>
        <Button buttonType="Line">비회원으로 시작하기</Button>
      </div>
    </>
  );
};
