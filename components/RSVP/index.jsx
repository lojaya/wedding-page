import RsvpForm from "./rsvp-form";

import IllustrationLove from "./illustration-love.svg";
import IllustrationRound from "./illustration-round.svg";
import CurvedSeparator from "./curved-separator.svg";

export default function Rsvp({ title, subtitle, formConfig }) {
  return (
    <section id="rsvp" className="bg-secondary spacer-one-top-lg o-hidden">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h1 className="display-4">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <RsvpForm config={formConfig} />
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator className="bg-white-svg" width="100%" height="100%" />
      </div>
      <div className="svg-decoration-container">
        <div className="svg-decoration middle-left">
          <IllustrationLove width="100%" height="100%" />
        </div>
        <div className="svg-decoration bottom-right">
          <IllustrationRound />
        </div>
      </div>
    </section>
  );
}
