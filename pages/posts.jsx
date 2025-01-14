import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezra Site</title>
        <meta name="description" content="מודעות צעירי חולון" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <h1 className={styles.title}>
          מודעות
        </h1>
        </div>
      </main>
    </div>
  )
}
