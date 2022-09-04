import PropTypes from "prop-types";

import { MoreOutlined } from "@ant-design/icons";

import styles from "../styles/ProfileBox.module.scss";

const ProfileBox = ({ displayName, icon, userName }) => {
  return (
    <div className={styles.profileBox}>
      <img className={styles.icon} src={icon} width="50px" height="50px" />
      <div className={styles.userInfo}>
        <h3 className={styles.displayName}>{displayName}</h3>
        <h4 className={styles.userName}>{userName}</h4>
      </div>
      <MoreOutlined className={styles.more} />
    </div>
  );
};

ProfileBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default ProfileBox;
