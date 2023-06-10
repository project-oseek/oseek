import React from 'react';

import clsx from 'clsx';
import * as S from './TextToggle.css';
import { Typography } from '../Typography';
import { styleToken } from '../../core';
import { Check } from '../../Icons';

type Props = {
  index: number;
  checked?: boolean;
  emoji: string;
  text: string;
  onClick: (index: number) => void;
};

export const TextToggle = ({ index, checked, emoji, text, onClick }: Props) => {
  const handleClick = () => {
    onClick(index);
  };
  return (
    <button className={clsx(S.container, checked && S.activeContainer)} onClick={handleClick}>
      <div>
        <span>{emoji}</span>
        <Typography className={clsx(S.text, checked && S.activeText)} as="strong" variant="ST1">
          {text}
        </Typography>
      </div>
      <Check width={24} height={24} color={checked ? styleToken.color.primary : styleToken.color.gray2} />
    </button>
  );
};

export default TextToggle;
