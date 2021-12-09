import { useState, useEffect } from "react";

export default function useStickyNav() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const toggleStickyHeader = () => {
      if (window.pageYOffset > 64) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", toggleStickyHeader);
    return () => window.removeEventListener("scroll", toggleStickyHeader);
  }, []);

  let stickyClasses = isSticky ? "switched-header" : "default";
  stickyClasses += " header";

  return { stickyClasses };
}
