import { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { Typography } from '../index';
import * as S from './token.css';
import { COLOR_PROPERTIES } from '../../core/styleToken.css';

const colorKeys = Object.keys(COLOR_PROPERTIES);
type ColorKey = keyof typeof COLOR_PROPERTIES;

const meta = {
  title: 'Design System/Token',
  tags: ['autodocs'],
  args: {
    colorName: 'primary',
  },
  argTypes: {
    colorName: {
      options: colorKeys,
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = () => {
  return (
    <Container>
      {colorKeys.map((colorName) => (
        <Color colorName={colorName as ColorKey} />
      ))}
    </Container>
  );
};

const Color = ({ colorName }: { colorName: ColorKey }) => {
  return (
    <div className={S.colorContainer}>
      <div className={S.color} style={{ backgroundColor: COLOR_PROPERTIES[colorName] }} />
      <Typography variant="ST1">
        {colorName}
        <br />
        {COLOR_PROPERTIES[colorName]}
      </Typography>
    </div>
  );
};

const Container = ({ children }: PropsWithChildren) => {
  return <div className={S.rootContainer}>{children}</div>;
};
