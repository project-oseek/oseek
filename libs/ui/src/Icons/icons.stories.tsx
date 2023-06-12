import { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { Typography } from '../components/Typography/Typography';
import {
  ArrowLeft,
  Bookmark,
  Check,
  Close,
  Crosshair,
  Delete,
  Favorite,
  Home,
  HomeFill,
  Like,
  Map,
  MyPage,
  Refresh,
  Search,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Edit,
  LikeFill,
  Notification,
  Photo,
  Status,
} from './index';
import SnsKakako from './SnsKakako';
import * as S from './icons.css';

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
      <Icon name="ArrowRight">
        <ArrowRight {...args} />
      </Icon>
      <Icon name="ChevronDown">
        <ChevronDown {...args} />
      </Icon>
      <Icon name="ChevronUp">
        <ChevronUp {...args} />
      </Icon>
      <Icon name="ChevronRight">
        <ChevronRight {...args} />
      </Icon>
      <Icon name="Check">
        <Check {...args} />
      </Icon>
      <Icon name="Close">
        <Close {...args} />
      </Icon>
      <Icon name="Edit">
        <Edit {...args} />
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
      <Icon name="HomeFill">
        <HomeFill {...args} />
      </Icon>
      <Icon name="MyPage">
        <MyPage {...args} />
      </Icon>
      <Icon name="Search">
        <Search {...args} />
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
      <Icon name="LikeFill">
        <LikeFill {...args} />
      </Icon>
      <Icon name="Map">
        <Map {...args} />
      </Icon>
      <Icon name="Notification">
        <Notification {...args} />
      </Icon>
      <Icon name="Photo">
        <Photo {...args} />
      </Icon>
      <Icon name="Status">
        <Status {...args} />
      </Icon>
    </Wrapper>
  );
};

const Icon = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <div className={S.IconWrapperStyle}>
      <div className={S.IconStyle}>{children}</div>
      <Typography variant="ST1">{name}</Typography>
    </div>
  );
};

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className={S.WrapperStyle}>{children}</div>;
};
