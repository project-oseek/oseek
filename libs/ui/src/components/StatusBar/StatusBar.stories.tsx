import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StatusBar } from './StatusBar';

const meta = {
  title: 'Design System/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
} as Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <StatusBar {...args} />;

export const Base = Template.bind({});
Base.args = {};
