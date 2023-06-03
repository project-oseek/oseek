import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '../Layout';
import { AppBar } from './AppBar';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import SvgArrowLeft from '../../Icons/ArrowLeft';
import SvgRefresh from '../../Icons/Refresh';
import SvgNotification from "../../Icons/Notification";
import Map from "../../Icons/Map";

const meta = {
  title: 'Design System/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  args: {
    title: '시작하기',
  },
} as Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => (
  <Layout>
    <AppBar {...args} />
  </Layout>
);

export const Base = Template.bind({});
export const Main = Template.bind({});
Base.args = {
  title: '시작하기',
  leftAction: <IconButton size="56px" icon={<SvgArrowLeft width={24} height={24} color="black" />} />,
  rightAction: <IconButton size="56px" icon={<SvgNotification width={24} height={24} color="black" />} />,
};

Main.args = {
  leftAction: (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
      <Map color="black" width={24} height={24} />
      <Typography variant="ST1" style={{ margin: '3px 0 0 2px' }}>
        안녕하세요
      </Typography>
    </div>
  ),
  rightAction: [
    <IconButton size="56px" icon={<SvgRefresh width={24} height={24} color="black" />} align="right" />,
    <IconButton size="56px" icon={<SvgNotification width={24} height={24} color="black" />} />,
  ],
};
