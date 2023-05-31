import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation } from './BottomNavigation';

const meta = {
  title: 'Design System/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    onNavigate: { action: 'onNavigate' },
  },
} as Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <BottomNavigation {...args} />;
export const Main = Template.bind({});
Main.args = {};
