import { useSession } from "next-auth/react"
import { LOADING } from "../assets/constants/auth-statuses"

import PageHead from "../components/PageHead"
import SignInOut from "../components/SignInOut"
import { Spin } from "antd"

import { useTranslation } from 'react-i18next'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const { data: session, status } = useSession()
  const { t } = useTranslation()

  return (
    <div>
      <PageHead title={ t('title.default') } description={ t('appDescription') } />

      <main className={styles.main}>
        { status === LOADING && <Spin className={styles.centered} />}
        { status !== LOADING && <SignInOut className={styles.centered} status={status}  />}
      </main>
    </div>
  )
}
