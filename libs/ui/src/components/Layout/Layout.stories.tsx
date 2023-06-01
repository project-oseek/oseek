import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';
import { Button } from '../Button';

const meta = {
  title: 'Design System/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'full-screen',
  },
} as Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <Layout {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: (
    <>
      <Button>버튼</Button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f1f1f1',
          width: '100%',
          height: 1800,
        }}
      >
        레이아웃 테스트
      </div>
    </>
  ),
};
