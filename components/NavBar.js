import PropTypes from "prop-types";

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

const NavBar = ({ onLinkClick, onMoreClick }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <a
        className={styles.navlink}
        data-test-id="home-link"
        onClick={() => onLinkClick("/")}
      >
        <HomeOutlined /> {t("home")}
      </a>
      <a
        className={styles.navlink}
        data-test-id="explore-link"
        onClick={() => onLinkClick("/explore")}
      >
        <NumberOutlined /> {t("explore")}
      </a>
      <a
        className={styles.navlink}
        data-test-id="notifications-link"
        onClick={() => onLinkClick("/notifications")}
      >
        <BellOutlined /> {t("notifications")}
      </a>
      <a
        className={styles.navlink}
        data-test-id="messages-link"
        onClick={() => onLinkClick("/messages")}
      >
        <MailOutlined /> {t("messages")}
      </a>
      <a
        className={styles.navlink}
        data-test-id="profile-link"
        onClick={() => onLinkClick("/profile")}
      >
        <UserOutlined /> {t("profile")}
      </a>
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
  onLinkClick: PropTypes.func.isRequired,
  onMoreClick: PropTypes.func.isRequired,
};

export default NavBar;
