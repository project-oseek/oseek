import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
