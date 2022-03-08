import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IBW Makerspace</title>
        <meta name="description" content="Official website for the Ida B. Wells-Barnett HS Makerspace Club" />
        <link rel="icon" href="#" />
      </Head>
      <canvas className={styles.bg} id="bg"></canvas>
      <div className={styles.header}>
       <h3 className={styles.headertext}>IBW Makerspace</h3>
       <a className={styles.headertextlink} href=". ">Home</a>
       <a className={styles.headertextlink} href="./board">Updates</a>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ida B. Wells Makerspace Club
        </h1>
        <div className={styles.bodydiv}>
          <h2 className={styles.bodytitle}>
            Placeholder text
          </h2>
          <p className={styles.bodytext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img className={styles.goat} src="goat.jpeg" alt="goat"></img>
          <p className={styles.imgcap}>
          A mascot drawn by club member Mati
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.foottext}>
          Join our <a className={styles.discord} href="https://discord.gg/r96CTKmCyU"> Discord</a>
        </p>
      </footer>
      <Script type="module" src="main.js" />
    </div>
  )
}
