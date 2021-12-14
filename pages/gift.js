import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { LangContext } from "../contexts/language";

export default function Home() {
  const router = useRouter();
  const [state] = useContext(LangContext);
  const [isLoading, updateLoading] = useState(true);
  const { locale } = state;
  const linkRef = router?.query?.ref;

  return (
    <div className={"wrapper"}>
      <Head>
        <title>{locale.page.title}</title>
        <meta name="description" content={locale.page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="text-center mt-5 mb-5">
          <Link
            href={{ pathname: linkRef === "rsvp" ? "/rsvp" : "/" }}
            scroll={false}
          >
            <a className="btn btn-secondary btn-wide-md btn-md cursor-pointer">
              Kembali ke e-invitation
            </a>
          </Link>
        </div>

        <div>
          {isLoading ? <div className="loader" /> : null}
          <iframe
            src="https://www.wishsite.net/embed/idmeod45"
            width="100%"
            height="auto"
            style={{
              height: "calc(100vh - 150px)",
            }}
            onLoad={() => updateLoading(!isLoading)}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
