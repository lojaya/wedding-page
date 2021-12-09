/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import useStickyNav from "./use-sticky-nav";
import useHamburger from "./use-hamburger";
import IconHamburger from "./icon-hamburger.svg";
import { scrollToAnchor } from "../../utils/helpers";
import { LangContext } from "../../contexts/language";

export default function Navigation({
  navigationItems,
  navigationLogoText,
  isRsvp,
}) {
  const { stickyClasses } = useStickyNav();
  const { isOpen, setOpen, togglerClasses, hamburgerClasses } = useHamburger();
  const [state, dispatch] = useContext(LangContext);

  const changeLanguage = (event) => {
    event.preventDefault();
    let lang = state.lang === "id" ? "en" : "id";
    dispatch({ type: "change_lang", lang });
  };

  return (
    <header className={stickyClasses}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg header-navbar ml-0 ml-lg-5">
          <a className="navbar-brand navbar-logo scroll">
            {navigationLogoText}
          </a>
          <button
            className={togglerClasses}
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!isOpen)}
          >
            <span>
              <IconHamburger />
            </span>
          </button>
          <div className={hamburgerClasses}>
            <ul className="navbar-nav header-navbar-nav">
              {navigationItems.map(([href, title], i) => {
                if (href === "#rsvp" && !isRsvp) return "";
                return (
                  <a
                    className="nav-link scroll"
                    href={href}
                    key={i}
                    onClick={scrollToAnchor}
                  >
                    {title}
                  </a>
                );
              })}

              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={changeLanguage}
              >
                <img src={`/${state.lang}.png`} alt="" />
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
