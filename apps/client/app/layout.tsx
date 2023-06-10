import './global.css';
import { PropsWithChildren } from 'react';
import { Layout } from '@oseek/ui';

export const metadata = {
  title: {
    default: '오늘의 식사',
    template: '오늘의 식사 | %s'
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
