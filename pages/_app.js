import { SessionProvider } from "next-auth/react";

import "../i18n";

import "antd/dist/antd.dark.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
