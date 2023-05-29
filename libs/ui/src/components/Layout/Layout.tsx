import React, { PropsWithChildren} from 'react';

import * as S from './Layout.css';

export const Layout = ({ children }: PropsWithChildren) => (
  <main className={S.LayoutStyle}>
    {children}
  </main>
);
