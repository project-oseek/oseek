import React, { PropsWithChildren } from 'react';

import * as S from './BodySection.css';

export const BodySection = ({ children }: PropsWithChildren) => {
  return <section className={S.container}>{children}</section>;
};

export default BodySection;
