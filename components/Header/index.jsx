/* eslint-disable @next/next/no-img-element */
import CurvedSeparator from "./curved-separator.svg";
import { scrollToAnchor } from "../../utils/helpers";

export default function Header({
  title,
  subtitle,
  date,
  background,
  msgButtonText,
  giftButtonText,
  rsvpButtonText,
  isRsvp
}) {
  return (
    <section className="gradient-overlay gradient-overlay-dark">
      <img className="bg-image" src={background} alt="Header Background" />
      <div className="container">
        <div
          className="
            row
            min-vh-80
            align-items-center
            z-index-2
            position-relative
            text-center
          "
        >
          <div className="col-12">
            <p className="font-weight-300 text-white lead mb-5">{title}</p>
            <h1 className="display-2 font-secondary text-white mb-4">
              {subtitle}
            </h1>
            <p className="font-weight-300 text-white lead mb-5">{date}</p>
            <a
              href="#messages"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2"
            >
              {msgButtonText}
            </a>

            <a
              href="#send-gift"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2"
            >
              {giftButtonText}
            </a>
          </div>
          {isRsvp && <div className="col-12">
            <a
              href="#rsvp"
              onClick={scrollToAnchor}
              className="btn btn-primary btn-wide-sm btn-sm mx-2"
            >
              {rsvpButtonText}
            </a>
          </div>}
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator width="100%" height="100%" />
      </div>
    </section>
  );
}
