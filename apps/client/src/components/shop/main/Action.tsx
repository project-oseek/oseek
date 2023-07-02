import { PropsWithChildren, ReactElement } from 'react';

import * as S from './Action.css';
import { IconButton } from '@oseek/ui';

type Props = {
  icon: ReactElement;
  title: ReactElement | string;
};

export const Action = ({ icon, title }: PropsWithChildren<Props>) => {
  return (
    <IconButton
      style={{ flex: 1 }}
      icon={
        <div className={S.Container}>
          {icon}
          <span className={S.Title}>{title}</span>
        </div>
      }
    />
  );
};
