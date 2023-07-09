'use client';

import { useRouter } from 'next/navigation';
import { COLOR_PROPERTIES, Notification } from '@oseek/ui';
import { PAGE_URL } from '@constant/pageUrl';
import { Container, Divider, MainLayout, useAuth } from '../../src/components';
import { Profile, MenuItem, RequiredLogin } from '../../src/components/settings';
import * as S from './page.css';

const { black } = COLOR_PROPERTIES;

const menuItems = [
  { path: PAGE_URL.SETTINGS_KEYWORD, title: '취향설정', isLoggined: true },
  { path: PAGE_URL.SETTINGS, title: '저장목록', isLoggined: true },
  { path: PAGE_URL.SETTINGS_NOTICE, title: '공지사항' },
  { path: PAGE_URL.SETTINGS, title: '환경설정' },
  { path: PAGE_URL.SETTINGS, title: '약관 및 정책' },
  { title: '앱 버전', subTitle: '1.0' },
];

const SettingsPage = () => {
  const router = useRouter();
  const { user, logout, isLoggedIn } = useAuth();

  const handleMoveToProfile = () => {
    router.push(PAGE_URL.SETTINGS_PROFILE);
  };

  return (
    <MainLayout
      activePath="/settings"
      leftAction={<div />}
      rightAction={
        <div className={S.rightAction}>
          <Notification color={black} />
        </div>
      }
    >
      <Container padding="0" className={S.Container}>
        {isLoggedIn ? <Profile thumbnail="/images/thumbnail.png" nickname={user?.nickname} description="소개글을 입력해주세요" onClick={handleMoveToProfile} /> : <RequiredLogin />}
        <Divider style={{ margin: 0, width: '100%' }} />
        <Container padding="0">
          {menuItems.map((item, index) => (item.isLoggined ? isLoggedIn && <MenuItem key={index} {...item} /> : <MenuItem key={index} {...item} />))}
        </Container>

        {isLoggedIn && (
          <>
            <Divider style={{ margin: 0, width: '100%' }} />
            <Container padding="0">
              <MenuItem title="로그아웃" onClick={logout} />
            </Container>
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default SettingsPage;
