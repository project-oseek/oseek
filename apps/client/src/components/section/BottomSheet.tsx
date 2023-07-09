import { Button } from '@oseek/ui';

import * as S from './BottomSheet.css';

type Props = {
  disabled?: boolean;
  onClick: () => void;
  text?: string;
};

export const BottomSheet = ({ disabled, onClick, text }: Props) => {
  return (
    <footer className={S.container}>
      <div className={S.gradient} />
      <Button buttonType="Primary" disabled={Boolean(disabled)} onClick={onClick}>
        {text}
      </Button>
    </footer>
  );
};
