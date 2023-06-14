'use client';

import { Alert, OverlayOption, useOverlay } from '@oseek/ui';

type ConfirmProps = {
  title: string;
  description: string;
  submitText?: string;
  closeText?: string;
};

export const useConfirm = () => {
  const showOverlay = useOverlay();
  const showConfirm = async (props: ConfirmProps, options?: OverlayOption) => {
    const resultConfirm = await showOverlay(<Alert type="confirm" {...props} />, options);
    return resultConfirm;
  };

  return showConfirm;
};
