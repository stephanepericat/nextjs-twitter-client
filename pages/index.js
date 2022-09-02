import { signIn, signOut, useSession } from "next-auth/react"
import { AUTHENTICATED, LOADING, UNAUTHENTICATED } from "../assets/constants/auth-statuses"

import Head from "next/head"
import { Button } from "antd"

import styles from '../styles/Home.module.scss'

export default function Home() {
  const { status } = useSession()

  return (
    <div>
      <Head>
        <title>Next.js Twitter Client</title>
        <meta name="description" content="A Twitter web client built with Next.js and Ant Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { status === LOADING && <p>loading...</p>}
        { status === AUTHENTICATED && <Button onClick={() => signOut()}>Sign Out</Button> }
        { status === UNAUTHENTICATED && <Button onClick={() => signIn()}>Sign In</Button> }
      </main>
    </div>
  )
}
