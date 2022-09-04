import PageHead from "../components/PageHead";

import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const pageTitle = `${session.user.name} / ${t("title.default")}`;

  return (
    <>
      <PageHead title={pageTitle} description={t("appDescription")} />
      <p>PROFILE PAGE</p>
    </>
  );
}
