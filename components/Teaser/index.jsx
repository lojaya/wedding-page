/* eslint-disable @next/next/no-img-element */
import CurvedSeparator from "./curved-separator.svg";

export default function Teaser({ title, subtitle, videoId, background }) {
  return (
    <section id="teaser" className="gradient-overlay">
      <img className="bg-image" src={background} alt="" />
      <div className="container spacer-double-lg">
        <div
          className="
            row
            align-items-center
            z-index-2
            position-relative
            text-center
          "
        >
          <div className="col-12">
            <h1 className="display-4 text-white mb-4">{title}</h1>
            <h3 className="w-md-50 mt-2 mb-4 mx-auto text-light font-weight-300">
              {subtitle}
            </h3>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube-nocookie.com/embed/" + videoId}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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
