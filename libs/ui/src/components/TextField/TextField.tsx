import React, { forwardRef, HTMLAttributes, ReactElement, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import * as S from './TextField.css';

type TextFieldProps = {
  id: string;
  name?: string;
  label?: string;
  focus?: boolean;
  action?: ReactElement;
  value: string;
};

type Props = TextFieldProps & HTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, Props>(({
  id,
  name,
  label,
  focus,
  action,
  value,
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
      value && S.containOutlint,
      textFocus && S.focusOutline
    )}>
      <label htmlFor={id} className={S.label}>
        {label}
      </label>
      <div className={S.inputContainer}>
        <input
          type="text"
          id={id}
          name={name}
          className={S.input}
          onFocus={handleFocusInInput}
          onBlur={handleFocusOutInput}
          ref={ref || inputRef}
          {...props}
        />
        {action && <div className={S.actionContainer}>{action}</div>}
      </div>
    </div>
  );
});
