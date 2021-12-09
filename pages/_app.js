import "../styles/bootstrap.css";
import "../styles/globals.css";
import "react-image-lightbox/style.css";

import { LangProvider } from "../contexts/language";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}

export default MyApp;
