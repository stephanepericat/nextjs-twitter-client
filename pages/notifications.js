import PageHead from "../components/PageHead";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <PageHead title={t("title.default")} description={t("appDescription")} />
      <p>NOTIFICATIONS PAGE</p>
    </>
  );
}
