import { useEffect } from 'react';

const useCloseWithESC = (callback) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        callback();
      }
    };

    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [callback]);

  return callback;
};

export default useCloseWithESC;
