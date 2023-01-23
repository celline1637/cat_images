export const getPosition = (currentTarget: HTMLElement) => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

  const zoomTarget = currentTarget.getBoundingClientRect();
  const top = zoomTarget.top;
  const left = zoomTarget.left;
  const width = zoomTarget.width;
  const height = zoomTarget.height;

  return {
    x: top + scrollTop,
    y: left + scrollLeft,
    width,
    height,
  };
};
