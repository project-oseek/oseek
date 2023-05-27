import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta = {
  title: 'Design System/Box',
  component: Box,
  tags: ['autodocs'],
} as Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <Box {...args} />;

export const Flex = Template.bind({});
Flex.args = {
  as: 'div',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 20,
  padding: 10,
  children: <div>Hello, World!</div>,
};
