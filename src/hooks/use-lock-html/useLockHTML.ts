import * as React from 'react';

// @see https://usehooks.com/useLockBodyScroll.
export function useLockHtml() {
  React.useLayoutEffect(() => {
    const html = document.querySelector('html');
    if (!html) return () => {};
    const originalOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = originalOverflow;
    };
  }, []);
}
