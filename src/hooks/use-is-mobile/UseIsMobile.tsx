import { useLayoutEffect, useState } from 'react';
// TODO: remove this lib and make hook via MUI
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import debounce from 'lodash-es/debounce';

const useIsMobile = (maxWidth: number): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    window.addEventListener('resize', debounce(updateSize, 250));
    updateSize();

    return (): void => window.removeEventListener('resize', updateSize);
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
