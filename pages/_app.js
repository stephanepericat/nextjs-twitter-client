import { SessionProvider } from "next-auth/react";

import AppLayout from "../components/AppLayout";

import "../i18n";

import "antd/dist/antd.dark.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  );
}

export default MyApp;
