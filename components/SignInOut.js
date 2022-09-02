import PropTypes from "prop-types";

import { AUTHENTICATED } from "../assets/constants/auth-statuses";

import { Button } from "antd";

const SignInOut = ({
  className,
  onSignIn,
  onSignOut,
  signInLabel,
  signOutLabel,
  status,
}) => {
  const isAuthenticated = status === AUTHENTICATED;

  return (
    <Button
      className={className}
      onClick={() => (isAuthenticated ? onSignOut() : onSignIn())}
    >
      {isAuthenticated ? signOutLabel : signInLabel}
    </Button>
  );
};

SignInOut.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  signInLabel: PropTypes.string.isRequired,
  signOutLabel: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SignInOut;
