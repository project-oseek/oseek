import './global.css';
import { PropsWithChildren } from 'react';
import { Layout, OverlayProvider, ReactQueryProvider } from '@oseek/ui';
import { AuthProvider } from '@components/provider';

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
        <ReactQueryProvider>
          <AuthProvider>
            <Layout>
              <OverlayProvider>{children}</OverlayProvider>
            </Layout>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
