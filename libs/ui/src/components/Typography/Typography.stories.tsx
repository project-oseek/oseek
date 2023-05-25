import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: '당신의 소중한 한끼를 위해, 오늘의 식사',
  },
  argTypes: {
    as: {
      options: ['p', 'h1', 'span', 'div'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = { variant: 'H1' };

export const Subtitle1 = Template.bind({});
Subtitle1.args = { variant: 'ST1' };

export const Subtitle2 = Template.bind({});
Subtitle2.args = { variant: 'ST2' };

export const Body1 = Template.bind({});
Body1.args = { variant: 'B1' };

export const Body2 = Template.bind({});
Body2.args = { variant: 'B2' };
