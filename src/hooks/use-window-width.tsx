import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
