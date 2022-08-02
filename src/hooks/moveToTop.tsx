export const moveToTop = () =>
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
