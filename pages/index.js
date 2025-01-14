import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezra Site</title>
        <meta name="description" content="אתר לצעירי חולון" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <h1 className={styles.title}>
          האתר
        </h1>
        <Link href="/posts">
          <a>פרסומים</a>
        </Link>
        </div>
      </main>
    </div>
  )
}
