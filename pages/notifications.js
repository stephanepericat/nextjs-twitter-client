import PageHead from "../components/PageHead";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const pageTitle = `${t("notifications")} / ${t("title.default")}`;

  return (
    <>
      <PageHead title={pageTitle} description={t("appDescription")} />
      <p>NOTIFICATIONS PAGE</p>
    </>
  );
}
