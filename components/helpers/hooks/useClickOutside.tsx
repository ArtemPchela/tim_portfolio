import { useRef, useEffect } from 'react';

const useClickOutside = (callback: { (): void; (): void; }) => {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    const checkIfClickedOutside = (e: { target: any; }) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('touchstart', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.removeEventListener('touchstart', checkIfClickedOutside);
    };
  }, [ref, callback]);

  return ref;
};

export default useClickOutside;
