import IconLove from "./icon-love.svg";
import IllustrationLove from "./illustration-love.svg";
import IllustrationRound from "./illustration-round.svg";
import CurvedSeparator from "./curved-separator.svg";

const htmlDecode = (content) => {
  if (process.browser) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
};

export default function Dates({
  title,
  subtitle,
  topContentTitle,
  topContent,
  timeline,
  bottomContentTitle,
  bottomContent,
}) {
  return (
    <section id="story" className="bg-secondary spacer-one-top-lg o-hidden">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="text-center mb-5 pb-5">
              <h1 className="display-4 mb-0">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="mb-3 pb-3">
              <h5
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: topContentTitle }}
              ></h5>
              <span
                className="small text-dark-gray opacity-8"
                dangerouslySetInnerHTML={{ __html: topContent }}
              ></span>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 px-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <ol className="story mb-0">
              {timeline.map(([title, subtitle, content], i) => {
                return (
                  <li key={i}>
                    <div className="story-icon bg-icon-primary">
                      <IconLove className="icon-svg" />
                    </div>
                    <div>
                      <h5 className="mb-0">{title}</h5>
                      <span className="small text-primary">{subtitle}</span>
                      <p
                        className="text-dark-gray pt-2"
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 mt-3 pt-3 px-4"></div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="">
              <h5
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: bottomContentTitle }}
              ></h5>
              <span
                className="text-dark-gray opacity-8"
                dangerouslySetInnerHTML={{ __html: bottomContent }}
              ></span>
            </div>
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
