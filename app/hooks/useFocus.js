import { useRef, useEffect } from 'react';

const useFocus = value => {
  const el = useRef(null);

  useEffect(() => {
    if (value) el.current.focus();
  }, [value]);

  return el;
};

export { useFocus };
