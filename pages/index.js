import PageHead from "../components/PageHead";

import { useTranslation } from "react-i18next";

// import styles from "../styles/Home.module.scss";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageHead title={t("title.default")} description={t("appDescription")} />
      <p>hello, world!</p>
    </>
  );
}
