import { PropsWithChildren, ReactElement } from 'react';

import { AppBar, ArrowLeft, BottomNavigation, IconButton, Search } from '@oseek/ui';
import { BodySection } from '../section';
import * as S from './MainLayout.css';

type Props = { activePath?: string; title?: string; leftAction?: ReactElement; rightAction?: ReactElement };

export const MainLayout = ({
  children,
  activePath = '/settings',
  title = '',
  leftAction = <IconButton icon={<ArrowLeft color="#000" />} />,
  rightAction = <IconButton icon={<Search color="#000" style={{ marginLeft: 'auto' }} />} />,
}: PropsWithChildren<Props>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar leftAction={leftAction} title={title} rightAction={rightAction} />
      <BodySection className={S.MainContainer}>{children}</BodySection>
      <BottomNavigation activePath={activePath} />
    </div>
  );
};
