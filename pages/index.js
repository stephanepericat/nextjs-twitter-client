import { useEffect, useState } from "react";
import axios from "axios";

import PageHead from "../components/PageHead";

import { Spin } from "antd";

import { useTranslation } from "react-i18next";
import { useTwitterApi } from "../assets/hooks/useTwitterApi";

// import styles from "../styles/Home.module.scss";

export default function Home() {
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { getTimeline } = useTwitterApi(axios);

  const pageTitle = `${t("home")} / ${t("title.default")}`;

  useEffect(() => {
    getTimeline()
      .then((res) => {
        setTimeline(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <PageHead title={pageTitle} description={t("appDescription")} />
      <ul>
        {timeline.data.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </>
  );
}
