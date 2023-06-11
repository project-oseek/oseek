import React, { PropsWithChildren } from 'react';

import * as S from './ContentSection.css';

export const ContentSection = ({ children }: PropsWithChildren) => {
  return (
    <section className={S.container}>
      <div className={S.content}>{children}</div>
    </section>
  );
};

export default ContentSection;
