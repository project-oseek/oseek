import React, { PropsWithChildren } from 'react';
import { AppBar, BottomNavigation, Map } from '@oseek/ui';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', border: '3px solid blue' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar leftAction={<Map color="#000" />} title="MAIN HEADER" rightAction="RIGHT" />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>
      </div>
      <BottomNavigation />
    </div>
  );
};
