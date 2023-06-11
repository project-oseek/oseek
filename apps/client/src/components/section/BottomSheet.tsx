import React from 'react';
import { Button } from '@oseek/ui';

import * as S from './BottomSheet.css';

type Props = {
  disabled?: boolean;
  onClick: () => void;
};

export const BottomSheet = ({ disabled, onClick }: Props) => {
  return (
    <footer className={S.container}>
      <div className={S.gradient} />
      <Button buttonType="Primary" disabled={Boolean(disabled)} onClick={onClick}>
        다음
      </Button>
    </footer>
  );
};
