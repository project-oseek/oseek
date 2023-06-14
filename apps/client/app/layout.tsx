import './global.css';
import { PropsWithChildren } from 'react';
import { Layout, OverlayProvider } from '@oseek/ui';

export const metadata = {
  title: {
    default: '오늘의 식사',
    template: '오늘의 식사 | %s',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <Layout>
          <OverlayProvider>{children}</OverlayProvider>
        </Layout>
      </body>
    </html>
  );
}
