import type { NextPage } from 'next'
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { getTimeOfDay } from '../utils/get-time-of-day'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex h="100vh" py="20">
          <VStack w="full" h="full" p={10} spacing={5} alignItems="flex-start" bg="gray.100">
            <VStack p={3} alignItems="flex-start">
              <Text>
                Good {getTimeOfDay()}!
              </Text>
              <Heading size="xl" className={styles.title}>
                My name is Dana Ciocan 
              </Heading>
              <Text>
                I write code for websites
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Home
