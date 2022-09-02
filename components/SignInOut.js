import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { AUTHENTICATED } from '../assets/constants/auth-statuses'

import { Button } from "antd"
import { signIn, signOut } from 'next-auth/react'

const SignInOut = ({ className, status }) => {
  const { t } = useTranslation()
  const isAuthenticated = status === AUTHENTICATED

  return (
    <Button className={className} onClick={ () => isAuthenticated ? signOut() : signIn() }>
      { isAuthenticated ? t('signOut') : t('signIn') }
    </Button>
  )
}

SignInOut.propTypes = {
  status: PropTypes.string.isRequired,
}

export default SignInOut
