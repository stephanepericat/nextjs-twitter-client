import { Spin } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

import { LOADING } from "../assets/constants/auth-statuses";

import styles from "../styles/AppLayout.module.scss";

import { useSession } from "next-auth/react";

export default function AppLayout({ children }) {
  const { status } = useSession();

  return (
    <div className={styles.layout}>
      {status === LOADING && <Spin className={styles.loader} />}
      {status !== LOADING && (
        <div className={styles.container}>
          <header className={styles.left}>
            <TwitterOutlined className={styles.logo} />
          </header>
          <main className={styles.main}>{children}</main>
          <aside className={styles.right}>right</aside>
        </div>
      )}
    </div>
  );
}
