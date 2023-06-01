import React, { HTMLAttributes, SVGProps } from 'react';
import clsx from 'clsx';

// import 순서 준수
// style override를 하고 싶으면, 먼저 컴포넌트를 import 하고 나서, override 할 class를 넣는다
// https://github.com/vanilla-extract-css/vanilla-extract/issues/725#issuecomment-1211463212
import { Button } from '../Button';
import * as S from './BottomNavigation.css';

import { Bookmark, Home, MyPage, Search } from '../../Icons';
import { styleToken } from '../../core';

type Props = {
  activePath?: string;
  onNavigate?: (path: string) => void;
} & HTMLAttributes<HTMLDivElement>;

const { color } = styleToken;

const DATA: { Icon: (args: SVGProps<SVGSVGElement>) => JSX.Element; label: string; path: string }[] = [
  { Icon: (args) => <Home {...args} />, label: '홈', path: '/' },
  { Icon: (args) => <Bookmark {...args} />, label: '저장', path: '/fav' },
  { Icon: (args) => <Search {...args} />, label: '검색', path: '/search' },
  { Icon: (args) => <MyPage {...args} />, label: '마이', path: '/my-page' },
];

export const BottomNavigation = ({ activePath = '/', onNavigate, className }: Props) => {
  return (
    <nav className={clsx([S.Basic, className])}>
      {DATA.map(({ Icon, label, path }, idx) => (
        <Button
          key={path + idx}
          className={clsx([S.NavigationButton, path === activePath && S.ActiveNavigationButton])}
          onClick={() => {
            onNavigate?.(path);
          }}
        >
          <Icon color={path === activePath ? color.primary : color.graySecondary} />
          {label}
        </Button>
      ))}
    </nav>
  );
};