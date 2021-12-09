import { smoothScrolling } from "../../utils/helpers";

export default function scrollToAnchor(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const $anchor = document.getElementById(id);
  if ($anchor) {
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    smoothScrolling(offsetTop);
  }
}
