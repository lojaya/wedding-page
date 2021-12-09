import { useContext } from "react";
import Head from "next/head";
import Angpao from "../components/Angpao";

import { LangContext } from "../contexts/language";

export default function Home() {
  const [state] = useContext(LangContext);
  const { locale } = state;

  return (
    <div className={"wrapper"}>
      <Head>
        <title>{locale.page.title}</title>
        <meta name="description" content={locale.page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Angpao />
    </div>
  );
}
