// Test Hook
import React, { useState } from 'react';

export const useCount = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  return [count, setCount];
};
