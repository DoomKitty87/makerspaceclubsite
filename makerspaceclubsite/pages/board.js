import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Board() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Updates</title>
        <meta name="description" content="Update board for Kale" />
        <link rel="icon" href="#" />
      </Head>
      <canvas className={styles.bg} id="bg"></canvas>
      <div className={styles.header}>
       <h3 className={styles.headertext}>IBW Makerspace</h3>
       <a className={styles.headertextlink} href=".">Home</a>
       <a className={styles.headertextlink} href="./board">Updates</a>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Makerspace Club Updates
        </h1>
        <div className={styles.update}>
          <h2 className={styles.bodytitle}>
            Discord Announcement 3/7/2022
          </h2>
          <p className={styles.bodytext}>
            Good morning everyone! Reminder that we have a meeting today after school in the usual spot. Today we will be doing two main tasks: refining the cabinet designs and starting on the manufacturing of the sheet metal door, and working on a club logo. As always if you want to work on a sperate project, feel free. Otto will also be helping people weld in the shop.
          </p>
        </div>
        <div className={styles.update}>
          <h2 className={styles.bodytitle}>
            Discord Announcement 2/27/2022
          </h2>
          <p className={styles.bodytext}>
          Hey everyone!

          Just a reminder about tomorrow's meeting in Room 8 at 3:30pm. We are going to be returning to designing storage units for our club with the goal of getting parts ordered so we can begin construction soon. We also want  to decorate these storage units, this means all you @Art/Visual Design folks should start brainstorming logos and patterns. Please do share your great ideas with everyone, we love to see what you're up to!

          If building storage for our future tools/equipment isn't your thing, Otto will once again be here if you want to get a free welding lesson. And as always feel free to bring in your own project to get help on/show off.

          And lastly, we've had a lot of new members join recently which is great! However we need to be able to communicate with everyone and accurately report our club membership. If you are new or are not sure we have your contact info, please take 2 minutes to fill out this form: https://forms.gle/t9crrornSnZnywYDA

          That should cover it, I hope you had a relaxing weekend. See you tomorrow!          </p>
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
