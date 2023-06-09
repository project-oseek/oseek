import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';
import { Layout } from '../Layout';
import { IconButton } from '../IconButton';
import SvgDelete from '../../Icons/Delete';
import { styleToken } from '../../core/styleToken.css';

const meta = {
  title: 'Design System/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    placeholder: '안녕하세요',
  },
} as Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => (
  <Layout>
    <TextField {...args} />
  </Layout>
);

export const Base = Template.bind({});
Base.args = {
  id: 'base',
  placeholder: '입력해주세요',
  focus: true,
};

export const Label = Template.bind({});
Label.args = {
  id: 'label',
  label: '닉네임',
  placeholder: '김오식 (최대 N자)',
};

export const Action = Template.bind({});
Action.args = {
  id: 'action',
  label: '닉네임',
  placeholder: '김오식 (최대 N자)',
  value: '떡볶이가 제일 좋아',
  action: <IconButton icon={<SvgDelete color={styleToken.color.black} />} size="24px" onClick={() => alert('액션 클릭')} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'action',
  label: '닉네임',
  placeholder: '김오식 (최대 N자)',
  value: '떡볶이가 제일 좋아',
  disabled: true,
  action: <IconButton icon={<SvgDelete color={styleToken.color.black} />} size="24px" onClick={() => alert('액션 클릭')} />,
};
