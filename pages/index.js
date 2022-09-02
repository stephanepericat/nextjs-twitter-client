import { signIn, signOut, useSession } from "next-auth/react"
import { AUTHENTICATED, LOADING, UNAUTHENTICATED } from "../assets/constants/auth-statuses"

import PageHead from "../components/PageHead"
import { Button, Spin } from "antd"

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
        { status === AUTHENTICATED && <Button className={styles.centered} onClick={() => signOut()}>{ t('signOut') }</Button> }
        { status === UNAUTHENTICATED && <Button className={styles.centered} onClick={() => signIn()}>{ t('signIn') }</Button> }
      </main>
    </div>
  )
}
