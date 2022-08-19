import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../comps/SideBar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - COVIC19</title>
      </Head>

      <div>
        <SideBar />
      </div>

    </div>
  )
}

export default Home
