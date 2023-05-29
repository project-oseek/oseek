'use client';

import React, { useEffect } from 'react';
import useGlobalStore from '@store/useGlobalStore';
import { useCount } from '@oseek/lib';
import { Button, Layout } from '@oseek/ui';

const IndexPage = () => {
  const [cnt] = useCount(99);
  const [user, setUser] = useGlobalStore(({ user, setUser }) => [user, setUser]);
  useEffect(() => {
    setUser({ id: '1', name: 'user' });
  }, []);
  return (
    <Layout>
      User: {user?.id} {user?.name}
      <Button>안녕</Button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '100%', height: 1800 }}>
        레이아웃 테스트
      </div>
    </Layout>
  );
};

export default IndexPage;
