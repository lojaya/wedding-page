import Link from "next/link";
import CurvedSeparator from "./curved-separator.svg";

export default function Gift({ title, angpaoText, giftText, content }) {
  return (
    <section id="send-gift" className="bg-primary">
      <div className="container spacer-double-lg">
        <div
          className="
          row
          justify-content-between
          z-index-3
          position-relative
          align-items-center
        "
        >
          <div className="col-md-6 mb-3 mb-md-0">
            <h1 className="display-4 text-white">{title}</h1>
            <p className="lead text-white mb-0">{content}</p>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 pt-5">
                <Link href="/angpao">
                  <a className="btn btn-secondary btn-wide-lg btn-lg cursor-pointer">
                    {angpaoText}
                  </a>
                </Link>
              </div>
              <div className="col-md-6 col-sm-12 pt-5">
                <Link href="/gift">
                  <a className="btn btn-secondary btn-wide-lg btn-lg cursor-pointer">
                    {giftText}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration z-index-3">
        <CurvedSeparator className="bg-white-svg" width="100%" height="100%" />
      </div>
    </section>
  );
}
