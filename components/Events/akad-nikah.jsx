export default function AkadNikah({
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
      <div className="card card-body justify-content-between">
        <div className="icon-round mb-5 mb-md-5 bg-icon-primary">
          {/* icon akad */}
        </div>
        <h5 className="mb-0">{event}</h5>
        <h6 className="mb-5">{time}</h6>
        <p className="text-align-center">
          {place} <br />
          {address} <br />
          {address_2} <br />
          {city}
        </p>
        <a
          href={maps}
          target="_blank"
          className="hover-arrow cursor-pointer"
          rel="noreferrer"
        >
          {direction_text} &rarr;
        </a>
      </div>
    </div>
  );
}
