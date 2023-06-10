import React, { ReactElement, Children } from 'react';

import * as S from './AppBar.css';

type Props = {
  title?: string;
  leftAction: ReactElement;
  rightAction?: ReactElement | ReactElement[];
};

export const AppBar = ({ title = '', leftAction, rightAction }: Props) => {
  const renderedRightAction = Children.toArray(rightAction);

  return (
    <div className={S.rootContainer}>
      <div className={S.actionContainer}>{leftAction}</div>
      <h4 className={S.title}>{title}</h4>
      <div className={S.rightContainer}>
        {
          renderedRightAction.length > 0 && (
            <>
              {Children.map(renderedRightAction, (action) => action)}
            </>
        )}
      </div>
    </div>
  );
};
