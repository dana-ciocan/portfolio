import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { getTimeOfDay } from '../utils/get-time-of-day'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
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
    </Container>
  )
}

export default Home
