import React, { HTMLAttributes, SVGProps } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import * as S from './BottomNavigation.css';

import { styleToken } from '../../core';
import Home from '../../Icons/Home';
import Bookmark from '../../Icons/Bookmark';
import Search from '../../Icons/Search';
import MyPage from '../../Icons/MyPage';

type Props = {
  activePath?: string;
} & HTMLAttributes<HTMLDivElement>;

const { color } = styleToken;

const DATA: { Icon: (args: SVGProps<SVGSVGElement>) => JSX.Element; path: string }[] = [
  { Icon: (args) => <Home {...args} />, path: '/' },
  { Icon: (args) => <Bookmark {...args} />, path: '/like' },
  { Icon: (args) => <Search {...args} />, path: '/search' },
  { Icon: (args) => <MyPage {...args} />, path: '/my-page' },
];

export const BottomNavigation = ({ activePath = '/', className }: Props) => {
  return (
    <nav className={clsx([S.BottomNavigationStyle, className])}>
      {DATA.map(({ Icon, path }, idx) => (
        <Link key={path + idx} className={clsx([S.NavigationButton, path === activePath && S.ActiveNavigationButton])} href={path}>
          <Icon color={path === activePath ? color.primary : color.gray2} />
        </Link>
      ))}
    </nav>
  );
};
