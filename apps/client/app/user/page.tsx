'use client';

import React, { useEffect } from 'react';
import useGlobalStore from '@store/useGlobalStore';

const UserPage = () => {
  const [user, setUser] = useGlobalStore(({ user, setUser }) => [user, setUser]);
  useEffect(() => {
    setUser({ id: '1', name: 'user' });
  }, []);
  return (
    <div>
      User: {user?.id} {user?.name}
    </div>
  );
};

export default UserPage;
