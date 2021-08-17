import { useEffect, useState } from 'react';

export const useDebounce = <T = string>(value: T, delay: number): T => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [delay, value]);

  return debounced;
};
