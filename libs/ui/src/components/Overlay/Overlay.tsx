import React, { cloneElement, PropsWithChildren, ReactElement } from 'react';

import * as S from './Overlay.css';

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (submitResult: unknown) => void;
  closeOnOverlayClick?: boolean;
  style?: React.CSSProperties;
};

type Props = PropsWithChildren<OverlayProps>;

export const Overlay = ({ isOpen, onClose, onSubmit, closeOnOverlayClick, style, children }: Props) => {
  const handleBackdropClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return isOpen ? (
    <>
      <div className={S.backDrop} onClick={handleBackdropClick} style={style} />
      <div className={S.overlayContanier} onClick={handleStopPropagation}>
        {children &&
          cloneElement(children as ReactElement, {
            onClose,
            onSubmit,
          })}
      </div>
    </>
  ) : null;
};
