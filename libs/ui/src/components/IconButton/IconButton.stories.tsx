import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';
import SvgNotification from "../../Icons/Notification";

const meta = {
  title: 'Design System/IconIconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    size: '56px',
    align: 'center',
  },
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = (args) => <IconButton {...args} />;

const size = "56px";

export const Base = Template.bind({});
Base.args = {
  size,
  icon: <SvgNotification width={24} height={24} color="black" />,
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  size,
  icon: <SvgNotification width={24} height={24} color="black" />,
  align: 'left',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  size,
  icon: <SvgNotification width={24} height={24} color="black" />,
  align: 'center',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  size,
  icon: <SvgNotification width={24} height={24} color="black" />,
  align: 'right',
};

