import { useState } from "react";

export default function useHamburger() {
  const [isOpen, setOpen] = useState(false);

  let togglerClasses = "navbar-toggler btn-navbar-toggler";
  if (!isOpen) togglerClasses += " collapsed";

  let hamburgerClasses =
    "nav-menu collapse navbar-collapse navbar-collapse justify-content-end mr-5";
  if (isOpen) hamburgerClasses += " show";

  return { isOpen, setOpen, togglerClasses, hamburgerClasses };
}
