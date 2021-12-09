import useCountdown from "./use-countdown";
import MaskLoveSvg from "./mask-love";
import CurvedSeparator from "./curved-separator.svg";

export default function SaveTheDate({
  title,
  subtitle,
  body,
  dateCountdown,
  background,
  countdownText,
}) {
  const countdownEl = useCountdown(dateCountdown, countdownText);

  return (
    <section id="save-the-date">
      <div className="container spacer-double-lg">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="pr-md-4">
              <h1 className="font-secondary display-4">{title}</h1>
              <p className="lead font-weight-300 text-dark-gray opacity-8">
                {subtitle}
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
