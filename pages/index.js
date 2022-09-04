import PageHead from "../components/PageHead";

import { useTranslation } from "react-i18next";

// import styles from "../styles/Home.module.scss";

export default function Home() {
  const { t } = useTranslation();
  const pageTitle = `${t("home")} / ${t("title.default")}`;

  return (
    <>
      <PageHead title={pageTitle} description={t("appDescription")} />
      <p>HOME PAGE</p>
    </>
  );
}
