'use client';

import React, { useEffect } from 'react';
import useGlobalStore from '@store/useGlobalStore';
import { useCount } from '@oseek/lib';
import { Button } from '@oseek/ui';

const UserPage = () => {
  const [cnt] = useCount(99);
  const [user, setUser] = useGlobalStore(({ user, setUser }) => [user, setUser]);
  useEffect(() => {
    setUser({ id: '1', name: 'user' });
  }, []);
  return (
    <div>
      User: {user?.id} {user?.name}
       <Button>안녕</Button>
    </div>
  );
};

export default UserPage;
