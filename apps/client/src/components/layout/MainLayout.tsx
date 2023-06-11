import React, { PropsWithChildren } from 'react';

import { AppBar, BottomNavigation, Map } from '@oseek/ui';
import { BodySection } from '../section';
import * as S from './MainLayout.css';

type Props = { activePath?: string };

export const MainLayout = ({ children, activePath = '/' }: PropsWithChildren<Props>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar leftAction={<Map color="#000" />} title="MAIN HEADER" rightAction="RIGHT" />
      <BodySection className={S.MainContainer}>{children}</BodySection>
      <BottomNavigation activePath={activePath} />
    </div>
  );
};
