import { Spin } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";

import { LOADING } from "../assets/constants/auth-statuses";

import styles from "../styles/AppLayout.module.scss";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

import consola from "consola";

export default function AppLayout({ children }) {
  const { status } = useSession();
  const { t } = useTranslation();
  const router = useRouter();

  const onLinkClick = (href) => router.push(href);
  const onMoreClick = (e) => consola.log("onMoreClick", e);

  return (
    <div className={styles.layout}>
      {status === LOADING && <Spin className={styles.loader} />}
      {status !== LOADING && (
        <div className={styles.container}>
          <header className={styles.left}>
            <TwitterOutlined className={styles.logo} />
            <NavBar onLinkClick={onLinkClick} onMoreClick={onMoreClick} />
          </header>
          <main className={styles.main}>{children}</main>
          <aside className={styles.right}>right</aside>
        </div>
      )}
    </div>
  );
}
