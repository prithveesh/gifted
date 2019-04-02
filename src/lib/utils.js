export const getScrollDirection = (() => {
  let lastScrollTop = 0;
  return () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollDown = false;
    if (st > lastScrollTop) {
      isScrollDown = true;
    }
    lastScrollTop = st <= 0 ? 0 : st;
    return isScrollDown;
  };
})();

export const getScrollEnd = (offset = 1000) => {
  if (
    window.innerHeight + document.documentElement.scrollTop + offset <
      document.documentElement.offsetHeight ||
    !getScrollDirection()
  ) {
    return false;
  }
  return true;
};

export function updateUrl() {}
