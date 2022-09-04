import PropTypes from "prop-types";

import { MoreOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import styles from "../styles/ProfileBox.module.scss";

const ProfileBox = ({ displayName, icon, userName }) => {
  const { t } = useTranslation();

  return (
    <button className={styles.profileBox}>
      <img
        className={styles.icon}
        alt={t("userIcon")}
        src={icon}
        width="50px"
        height="50px"
      />
      <div className={styles.userInfo}>
        <h3 className={styles.displayName}>{displayName}</h3>
        <h4 className={styles.userName}>{userName}</h4>
      </div>
      <MoreOutlined className={styles.more} />
    </button>
  );
};

ProfileBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default ProfileBox;
