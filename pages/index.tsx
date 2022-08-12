import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { getTimeOfDay } from '../utils/get-time-of-day'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.greeting}>
          Good {getTimeOfDay()}!
        </div>
        <h1 className={styles.title}>
          My name is Dana Ciocan 
        </h1>
        <div>
          I write code for websites
        </div>
      </Layout>
    </div>
  )
}

export default Home
