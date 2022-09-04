import PropTypes from "prop-types";

import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import styles from "../styles/ProfileBox.module.scss";

const ProfileBox = ({
  className,
  displayName,
  icon,
  logoutLabel,
  onLogoutClick,
  userName,
}) => {
  const { t } = useTranslation();

  const content = <a onClick={onLogoutClick}>{logoutLabel}</a>;

  return (
    <Popover content={content} placement="top" title={userName} trigger="click">
      <button className={`${styles.profileBox} ${className}`}>
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
    </Popover>
  );
};

ProfileBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  logoutLabel: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default ProfileBox;
