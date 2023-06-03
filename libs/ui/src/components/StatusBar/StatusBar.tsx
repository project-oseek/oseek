import React, { PropsWithChildren} from 'react';

import * as S from './StatusBar.css';
import SvgStatus from "../../Icons/Status";

export const StatusBar = ({ children }: PropsWithChildren) => (
  <div className={S.StatusBarStyle}>
    <SvgStatus width={46} height={10} />
  </div>
);
