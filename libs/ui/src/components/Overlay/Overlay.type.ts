import { ReactNode } from 'react';

export type OverlaySubmitResult = unknown;

export type OverlayOpenFn = (children: ReactNode, option?: OverlayOption) => Promise<OverlaySubmitResult> | null;

export type OverlayOption = {
  closeOnOverlayClick?: boolean;
};
