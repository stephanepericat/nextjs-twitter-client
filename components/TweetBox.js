import PropTypes from "prop-types";

import {
  // HeartFilled,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import styles from "../styles/TweetBox.module.scss";

const TweetBox = ({ displayName, text, userName }) => {
  return (
    <div className={styles.tweetBox}>
      <h3 className={styles.user}>
        <strong className={styles.displayName}>{displayName}</strong>
        <span className={styles.userName}>@{userName}</span>
      </h3>
      <p>{text}</p>
      <div className={styles.actions}>
        <MessageOutlined />
        <RetweetOutlined />
        <HeartOutlined />
        <UploadOutlined />
      </div>
    </div>
  );
};

TweetBox.propTypes = {
  displayName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default TweetBox;
