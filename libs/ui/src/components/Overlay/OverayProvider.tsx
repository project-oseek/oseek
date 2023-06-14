'use client';

import React, { createContext, useState, useContext, useCallback, PropsWithChildren, ReactNode, cloneElement, isValidElement, ReactElement } from 'react';
import { OverlayOpenFn, OverlayOption, OverlaySubmitResult } from './Overlay.type';
import { Overlay } from './Overlay';

export const OverlayContext = createContext<OverlayOpenFn | null>(null);

const defaultOverlayOption: OverlayOption = {
  closeOnOverlayClick: false,
};

type dialogState = {
  content: ReactNode;
  options: OverlayOption;
  key: string;
  resolver: (value: unknown) => void;
};

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [overlays, setOverlays] = useState<dialogState[]>([]);
  const [overlayCounter, setOverlayCounter] = useState(0);

  const openOverlay: OverlayOpenFn = useCallback((children, option) => {
    if (React.isValidElement(children)) {
      setOverlayCounter((prevModalCounter) => prevModalCounter + 1);
      const key = `modal-${overlayCounter}`;

      setOverlays((prevOverlays) => [
        ...prevOverlays,
        {
          content: children,
          options: { ...defaultOverlayOption, ...(option ?? {}) },
          key,
          resolver: () => {},
        },
      ]);

      return new Promise((resolve) => {
        setOverlays((prevOverlays) =>
          prevOverlays.map((prevOverlay) =>
            prevOverlay.key === key
              ? {
                  ...prevOverlay,
                  resolver: resolve,
                }
              : prevOverlay,
          ),
        );
      });
    }

    return null;
  }, []);

  const closeOverlay = (key: string) => {
    setOverlays((prevOverlays) => prevOverlays.filter((modal) => modal.key !== key));
  };

  const submitOverlay = (key: string, result: OverlaySubmitResult) => {
    const targetOverlay = overlays.find((modal) => modal.key === key);
    if (targetOverlay) {
      targetOverlay.resolver(result);
      closeOverlay(key);
    }
  };

  return (
    <OverlayContext.Provider value={openOverlay}>
      {children}
      {overlays.map(({ content, options, key }, index) => {
        const isHidden = index < overlays.length - 1;
        const overlayStyle = isHidden ? { display: 'none' } : {};
        const handleOverlayClose = () => closeOverlay(key);
        const handleOverlaySubmit = (submitResult: OverlaySubmitResult) => submitOverlay(key, submitResult);
        return (
          <Overlay key={key} isOpen onClose={handleOverlayClose} onSubmit={handleOverlaySubmit} closeOnOverlayClick={options.closeOnOverlayClick} style={overlayStyle}>
            {isValidElement(content) &&
              cloneElement(content as ReactElement, {
                onClose: handleOverlayClose,
                onSubmit: handleOverlaySubmit,
              })}
          </Overlay>
        );
      })}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error('useOverlay를 사용하려면 OverlayProvider를 상위에 제공해야 합니다.');
  }

  return context;
};
