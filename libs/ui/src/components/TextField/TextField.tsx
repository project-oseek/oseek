import React, {ChangeEvent, HTMLAttributes, ReactElement, useEffect, useMemo, useRef, useState} from 'react';

import clsx from 'clsx';
import * as S from './TextField.css';

type TextFieldProps = {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  focus?: boolean;
  action?: ReactElement;
  value: string;
  maxLength?: number;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = TextFieldProps & HTMLAttributes<HTMLInputElement>;

export const TextField = ({
  id,
  name,
  label,
  placeholder,
  focus,
  action,
  value,
  maxLength,
  disabled,
  onChange,
}: Props) => {
  const [textFocus, setTextFocus] = useState(focus);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerStyle = useMemo(() => [
    S.rootContainer,
    value && S.containOutlint,
    textFocus && S.focusOutline
  ], [value, textFocus]);

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
  }, [textFocus, inputRef]);

  return (
    <div className={clsx(containerStyle)}>
      <label htmlFor={id} className={S.label}>{label}</label>
      <div className={S.inputContainer}>
        <input
          type="text"
          id={id}
          name={name}
          className={S.input}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocusInInput}
          onBlur={handleFocusOutInput}
          ref={inputRef}
        />
        {
          action && (
            <div className={S.actionContainer}>
              {action}
            </div>
          )
        }
      </div>

    </div>
  );
};
