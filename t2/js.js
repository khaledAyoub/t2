let scrollold = window.scrollY;
window.addEventListener("scroll", () => {
  let temp = document.getElementsByTagName("header")[0];
  if (window.scrollY > scrollold) {
    temp.classList.add("header-aniamted-forward");
    temp.classList.remove("header-aniamted-backward");
    scrollold = window.scrollY;
  } else if (window.scrollY < scrollold) {
    document;
    temp.classList.add("header-aniamted-backward");
    temp.classList.remove("header-aniamted-forward");
    scrollold = window.scrollY;
  }
});
