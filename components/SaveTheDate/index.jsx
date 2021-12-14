/* eslint-disable @next/next/no-img-element */
import useCountdown from "./use-countdown";
import MaskLoveSvg from "./mask-love";
import CurvedSeparator from "./curved-separator.svg";

export default function SaveTheDate({
  title,
  subtitle,
  liveStreamText,
  body,
  dateCountdown,
  background,
  countdownText,
  streamId
}) {
  const countdownEl = useCountdown(dateCountdown, countdownText);

  return (
    <section id="live">
      <div className="container spacer-double-lg">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="pr-md-4">
              <h1 className="font-secondary display-4">{title}</h1>
              <p className="lead font-weight-300 text-dark-gray opacity-8">
                {subtitle}
              </p>
              <p className="lead">
                <a
                  href={`https://youtu.be/${streamId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {liveStreamText + " "}
                  <img
                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-share-8.png&r=255&g=0&b=0"
                    alt="share"
                    width="16"
                    style={{ verticalAlign: "inherit" }}
                  />
                </a>
              </p>

              <p className="mb-4 pr-5">{body}</p>
              <div className="countdown row text-center">{countdownEl}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="svg-mask-container">
              <MaskLoveSvg background={background} />
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
