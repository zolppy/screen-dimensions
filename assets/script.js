const checkDimensions = (el) => {
  const width = el.clientWidth;
  const height = el.clientHeight;

  return {
    width: width,
    height: height,
  };
};

const showDimensions = (width, height) => {
  const widthEl = document.querySelector(".device__width");
  const heightEl = document.querySelector(".device__height");
  const dimensionsEl = document.querySelector(".device__dimensions");

  widthEl.textContent = `${width}px`;
  heightEl.textContent = `${height}px`;
  dimensionsEl.textContent = `${width}x${height}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const { width, height } = checkDimensions(body);

  showDimensions(width, height);
});

window.addEventListener("resize", () => {
  const body = document.querySelector("body");
  const { width, height } = checkDimensions(body);

  showDimensions(width, height);
});
