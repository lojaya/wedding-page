export const smoothScrolling = (offset = 0) => {
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

export const scrollToAnchor = (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute("href").slice(1);
  const $anchor = document.getElementById(id);
  if ($anchor) {
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    smoothScrolling(offsetTop);
  }
}
