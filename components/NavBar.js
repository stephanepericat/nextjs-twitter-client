import PropTypes from "prop-types";

import Link from "next/link";

import {
  BellOutlined,
  HomeOutlined,
  MailOutlined,
  NumberOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import styles from "../styles/NavBar.module.scss";

const NavBar = ({ onMoreClick }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navlink} data-test-id="home-link">
          <HomeOutlined /> {t("home")}
        </a>
      </Link>
      <Link href="/explore">
        <a className={styles.navlink} data-test-id="explore-link">
          <NumberOutlined /> {t("explore")}
        </a>
      </Link>
      <Link href="/notifications">
        <a className={styles.navlink} data-test-id="notifications-link">
          <BellOutlined /> {t("notifications")}
        </a>
      </Link>
      <Link href="/messages">
        <a className={styles.navlink} data-test-id="messages-link">
          <MailOutlined /> {t("messages")}
        </a>
      </Link>
      <Link href="/profile">
        <a className={styles.navlink} data-test-id="profile-link">
          <UserOutlined /> {t("profile")}
        </a>
      </Link>
      <a
        className={styles.navlink}
        data-test-id="more-link"
        onClick={onMoreClick}
      >
        <PlusCircleOutlined /> {t("more")}
      </a>
    </nav>
  );
};

NavBar.propTypes = {
  onMoreClick: PropTypes.func.isRequired,
};

export default NavBar;
