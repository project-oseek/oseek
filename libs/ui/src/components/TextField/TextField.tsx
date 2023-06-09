import React, { forwardRef, HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import * as S from './TextField.css';

type TextFieldProps = {
  id: string;
  name?: string;
  label?: string;
  focus?: boolean;
  value: string;
  disabled?: boolean;
  action?: ReactElement;
};

type Props = TextFieldProps & HTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, Props>(({
  id,
  name,
  label,
  focus,
  value,
  disabled,
  action,
  ...props
}: Props, ref) => {
  const [textFocus, setTextFocus] = useState(Boolean(focus));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInInput = () => {
    setTextFocus(true);
  };

  const handleFocusOutInput = () => {
    setTextFocus(false);
  };

  useEffect(() => {
    if (inputRef.current && textFocus) {
      inputRef.current.focus();
    }
  }, [textFocus]);

  return (
    <div className={clsx(
      S.rootContainer,
      value && S.containOutline,
      textFocus && S.focusOutline,
      disabled && S.disabledOutline
    )}>
      <label htmlFor={id} className={clsx(S.label, disabled && S.disabledLabel)}>
        {label}
      </label>
      <div className={S.inputContainer}>
        <input
          type="text"
          id={id}
          name={name}
          className={clsx(S.input, disabled && S.disabledInput)}
          onFocus={handleFocusInInput}
          onBlur={handleFocusOutInput}
          disabled={disabled}
          ref={ref || inputRef}
          {...props}
        />
        {action && <div className={S.actionContainer}>{action}</div>}
      </div>
    </div>
  );
});
