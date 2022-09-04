import { Button, Spin } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";
import ProfileBox from "./ProfileBox";

import styles from "../styles/AppLayout.module.scss";

import { useRouteGuards } from "../assets/hooks/useRouteGuards";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { useAppLayout } from "../assets/hooks/useAppLayout";

const AppLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { redirectToLogin, redirectToLogout } = useRouteGuards(router);

  redirectToLogin(status);

  const { t } = useTranslation();
  const { onMoreClick, onTweetButtonClick, showLayout, showLoader } =
    useAppLayout(status);

  return (
    <div className={styles.layout}>
      {showLoader && <Spin className={styles.loader} />}
      {showLayout && (
        <div className={styles.container}>
          <header className={styles.left}>
            <TwitterOutlined className={styles.logo} />
            <NavBar onMoreClick={onMoreClick} />
            <Button
              className={styles.twtBtn}
              shape="round"
              size="large"
              type="primary"
              onClick={onTweetButtonClick}
            >
              {t("tweet")}
            </Button>
            <div className={styles.spacer}></div>
            <ProfileBox
              className={styles.userBox}
              displayName={session.user.name}
              icon={session.user.image}
              logoutLabel={t("signOut")}
              onLogoutClick={redirectToLogout}
              userName="@foobar"
            />
          </header>
          <main className={styles.main}>{children}</main>
          <aside className={styles.right}>right</aside>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
