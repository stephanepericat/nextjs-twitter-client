// import { useState } from "react";
// import axios from "axios";

import PageHead from "../components/PageHead";

import { useTranslation } from "react-i18next";
// import { useTwitterApi } from "../assets/hooks/useTwitterApi";

// import styles from "../styles/Home.module.scss";

export default function Home() {
  // const [timeline, setTimeline] = useState();
  const { t } = useTranslation();
  const pageTitle = `${t("home")} / ${t("title.default")}`;
  // const { getTimeline } = useTwitterApi(axios);

  // getTimeline().then(({ data }) => {
  //   console.log("timeline", data);
  //   setTimeline(data);
  // });

  return (
    <>
      <PageHead title={pageTitle} description={t("appDescription")} />
      <p>HOME PAGE</p>
    </>
  );
}
