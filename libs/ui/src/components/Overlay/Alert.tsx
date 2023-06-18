import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import * as S from './Alert.css';
import { Button } from '../Button';
import { Typography } from '../Typography';

export type AlertType = 'alert' | 'confirm';

type AlertProps = {
  onClose?: () => void;
  onSubmit?: (submitResult: unknown) => void;
  type?: AlertType;
  title: string;
  description?: string;
  submitText?: string;
  closeText?: string;
};

const AlertContainer = ({ children }: PropsWithChildren) => <section className={S.alertContainer}>{children}</section>;

const AlertBody = ({ children }: PropsWithChildren) => <div className={S.alertBody}>{children}</div>;

const AlertFooter = ({ onClose, onSubmit, submitText = '확인', closeText = '취소' }: Pick<AlertProps, 'onClose' | 'onSubmit' | 'submitText' | 'closeText'>) => (
  <footer className={S.alertFooter}>
    {onClose && (
      <Button className={clsx(S.buttonGap, S.button)} onClick={onClose}>
        {closeText}
      </Button>
    )}
    {onSubmit && (
      <Button className={S.button} buttonType="Primary" onClick={onSubmit}>
        {submitText}
      </Button>
    )}
  </footer>
);

export const Alert = ({ onClose, onSubmit, type = 'alert', title, description, submitText, closeText }: AlertProps) => {
  const handleAlertClose = () => {
    onClose?.();
  };
  const handleAlertSubmit = () => {
    onSubmit?.(true);
  };
  return (
    <AlertContainer>
      <AlertBody>
        <Typography variant="ST1">{title}</Typography>
        {description && (
          <Typography variant="B2" className={S.bodyTextGap}>
            {description}
          </Typography>
        )}
      </AlertBody>
      <AlertFooter onSubmit={handleAlertSubmit} {...(type === 'confirm' && { onClose: handleAlertClose })} submitText={submitText} closeText={closeText} />
    </AlertContainer>
  );
};
