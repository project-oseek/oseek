import { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { Typography } from '../components';
import { IconStyle, IconWrapperStyle, WrapperStyle } from './icons.css';
import ArrowLeft from './ArrowLeft';
import Check from './Check';
import Close from './Close';
import Delete from './Delete';
import Refresh from './Refresh';
import SnsKakako from './SnsKakako';
import Bookmark from './Bookmark';
import Home from './Home';
import MyPage from './MyPage';
import Search from './Search';
import ArrowDown from './ArrowDown';
import Crosshair from './Crosshair';
import Favorite from './Favorite';
import Like from './Like';
import Map from './Map';
import Noti from './Noti';

const meta = {
  title: 'Design System/Icon',
  tags: ['autodocs'],
  args: {
    color: '#131313',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
} as Meta<typeof ArrowLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = (args) => {
  return (
    <Wrapper>
      <Icon name="ArrowLeft">
        <ArrowLeft {...args} />
      </Icon>
      <Icon name="Check">
        <Check {...args} />
      </Icon>
      <Icon name="Close">
        <Close {...args} />
      </Icon>
      <Icon name="Delete">
        <Delete {...args} />
      </Icon>
      <Icon name="Refresh">
        <Refresh {...args} />
      </Icon>
      <Icon name="SnsKakao">
        <SnsKakako {...args} />
      </Icon>
      <Icon name="BookMark">
        <Bookmark {...args} />
      </Icon>
      <Icon name="Home">
        <Home {...args} />
      </Icon>
      <Icon name="MyPage">
        <MyPage {...args} />
      </Icon>
      <Icon name="Search">
        <Search {...args} />
      </Icon>
      <Icon name="ArrowDown">
        <ArrowDown {...args} />
      </Icon>
      <Icon name="Crosshair">
        <Crosshair {...args} />
      </Icon>
      <Icon name="Favorite">
        <Favorite {...args} />
      </Icon>
      <Icon name="Like">
        <Like {...args} />
      </Icon>
      <Icon name="Map">
        <Map {...args} />
      </Icon>
      <Icon name="Noti">
        <Noti {...args} />
      </Icon>
    </Wrapper>
  );
};

const Icon = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <div className={IconWrapperStyle}>
      <div className={IconStyle}>{children}</div>
      <Typography variant="ST1">{name}</Typography>
    </div>
  );
};

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className={WrapperStyle}>{children}</div>;
};
