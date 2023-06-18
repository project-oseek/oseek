'use client';

import { Alert, OverlayOption, useOverlay } from '@oseek/ui';

type AlertProps = {
  title: string;
  submitText?: string;
};

export const useAlert = () => {
  const showOverlay = useOverlay();
  const showAlert = async (props: AlertProps, options?: OverlayOption) => {
    const resultAlert = await showOverlay(<Alert type="alert" {...props} />, options);
    return resultAlert;
  };

  return showAlert;
};
