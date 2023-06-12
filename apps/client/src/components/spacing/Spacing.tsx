import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import * as S from './Spacing.css';

type Props = { size?: number } & HTMLAttributes<HTMLDivElement>;

// Usage: Element 사이의 공백 설정에 유용할거 같습니다
// Example: <Spacing size={48} />
export const Spacing = ({ size = 16, className, ...props }: Props) => {
  return <div style={{ marginTop: size }} className={clsx([S.Basic, className])} {...props} />;
};
