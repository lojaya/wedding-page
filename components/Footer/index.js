export default function Footer({ title, subtitle, healthProtocols }) {
  return (
    <footer className="spacer-double-lg bg-secondary">
      <div className="container">
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
          {healthProtocols.map((protocol, i) => {
            return (
              <div className="col-md-3" key={i}>
                <div className="signature mb-3">
                  <h6 className="text-primary text-uppercase">
                    {protocol.title}
                  </h6>
                </div>
                <p className="text-dark">{protocol.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
