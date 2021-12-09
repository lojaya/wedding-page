/* eslint-disable @next/next/no-img-element */
import AkadNikah from "./akad-nikah";
import Teapai from "./teapai";
import Reception from "./reception";
import CurvedSeparator from "./curved-separator.svg";
import { scrollToAnchor } from "../../utils/helpers";

export default function Events({
  title,
  akadData,
  teapaiData,
  receptionData,
  background,
  background2,
  giftButtonText,
}) {
  return (
    <section id="wedding" className="spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="text-center mb-5 pb-5">
              <h1 className="display-4 mb-0">{title}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 d-flex mb-4 mb-lg-0 display-state">
            <div className="card card-icon-2 card-body justify-content-between">
              <img className="bg-image" src={background} alt="" />
            </div>
          </div>
          <AkadNikah {...akadData} />
          <Teapai {...teapaiData} />
        </div>
        <div className="row mt-5">
          <Reception {...receptionData} />
          <div className="col-lg-8 d-flex mb-4 mb-lg-0 display-state">
            <div className="card card-icon-2 card-body justify-content-between">
              <img className="bg-image" src={background2} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-center mt-5 pt-5">
              <a
                href="#send-gift"
                onClick={scrollToAnchor}
                className="btn btn-primary btn-wide-sm btn-sm cursor-pointer"
              >
                {giftButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator
          className="bg-secondary-svg"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
