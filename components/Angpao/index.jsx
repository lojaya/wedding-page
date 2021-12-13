/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";

export default function Transfer({
  title = "Pindai QR atau salin nomor rekening",
  subtitle,
}) {
  const router = useRouter();
  const linkRef = router?.query?.ref;

  return (
    <section id="location" className="spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h1 className="display-4">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between">
              <h2 className="mb-0">BCA</h2>
              <h5 className="mb-0">Iksandi Lojaya</h5>
              <h4 className="mb-0">5040230957</h4>
              <img alt="BCA" className="rounded img-fluid" src="/qr/bca.jpeg" />
              <div className="badge-overlap">
                <span className="badge">Bank: BCA</span>
              </div>

              <CopyToClipboard text="5040230957">
                <button className="btn btn-primary">Salin Nomor</button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between">
              <h2 className="mb-0">GoPay</h2>
              <h5 className="mb-0">Iksandi Lojaya</h5>
              {/* <h4 className="mb-0">085273703927</h4> */}
              <img
                alt="GoPay"
                className="rounded img-fluid"
                src="/qr/gopay.jpeg"
              />
              <div className="badge-overlap">
                <span className="badge">E-Wallet: GoPay</span>
              </div>

              <CopyToClipboard text="085273703927">
                <button className="btn btn-primary">Salin Nomor</button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between">
              <h2 className="mb-0">OVO</h2>
              <h5 className="mb-0">Iksandi Lojaya</h5>
              {/* <h4 className="mb-0">085273703927</h4> */}
              <img alt="OVO" className="rounded img-fluid" src="/qr/ovo.jpeg" />
              <div className="badge-overlap">
                <span className="badge">E-Wallet: OVO</span>
              </div>

              <CopyToClipboard text="085273703927">
                <button className="btn btn-primary">Salin Nomor</button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex mb-4 mb-lg-0">
            <div className="card card-body justify-content-between">
              <h2 className="mb-0">Jenius</h2>
              <h5 className="mb-0">Iksandi Lojaya</h5>
              <h4 className="mb-0">$iksandi / 90011565540</h4>

              <CopyToClipboard text="$iksandi">
                <button className="btn btn-primary">Salin $Cashtag</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="text-center mt-5 pt-5">
              <Link
                href={{ pathname: linkRef === "rsvp" ? "/rsvp" : "/" }}
                scroll={false}
              >
                <a className="btn btn-secondary btn-wide-md btn-md cursor-pointer">
                  Kembali ke e-invitation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
