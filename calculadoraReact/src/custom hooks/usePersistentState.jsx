import { useState } from 'react';
import { useEffect } from 'react';

export function usePersistedState(key, defaultValue, storageType = 'session') {
  const storage = storageType === 'session' ? localStorage : sessionStorage;

  const getItem = () => {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  };

  const [state, setState] = useState(getItem);

  useEffect(() => {
    storage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
