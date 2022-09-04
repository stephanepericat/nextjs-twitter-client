import { Spin } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";

import { LOADING } from "../assets/constants/auth-statuses";

import styles from "../styles/AppLayout.module.scss";

import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { useAppLayout } from "../assets/hooks/useAppLayout";

export default function AppLayout({ children }) {
  const { status } = useSession();
  const { t } = useTranslation();
  const { onMoreClick } = useAppLayout();

  return (
    <div className={styles.layout}>
      {status === LOADING && <Spin className={styles.loader} />}
      {status !== LOADING && (
        <div className={styles.container}>
          <header className={styles.left}>
            <TwitterOutlined className={styles.logo} />
            <NavBar onMoreClick={onMoreClick} />
          </header>
          <main className={styles.main}>{children}</main>
          <aside className={styles.right}>right</aside>
        </div>
      )}
    </div>
  );
}
