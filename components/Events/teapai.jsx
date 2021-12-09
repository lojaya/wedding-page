export default function Teapai({
  event,
  time,
  place,
  address,
  address_2,
  city,
  maps,
  direction_text,
}) {
  return (
    <div className="col-md-6 col-lg-4 d-flex mb-4 mb-lg-0">
      <div
        className="
              card card-body
              justify-content-between
              bg-primary
              text-light
            "
      >
        <div className="icon-round mb-3 mb-md-5 bg-icon-white">
          {/* icon reception */}
        </div>
        <h5 className="mb-0 text-white">{event}</h5>
        <h6 className="mb-5 text-white">{time}</h6>
        <p className="text-align-center">
          {place} <br />
          {address} <br />
          {address_2} <br />
          {city}
        </p>
        <a
          href={maps}
          target="_blank"
          className="hover-arrow text-white cursor-pointer"
          rel="noreferrer"
        >
          {direction_text} &rarr;
        </a>
      </div>
    </div>
  );
}
