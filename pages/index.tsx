import type { NextPage } from 'next'
import { Container, Flex, VStack, Heading, Text, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { getTimeOfDay } from '../utils/get-time-of-day'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex h="100vh" py="20">
          <VStack w="full" h="full" p={10} spacing={5} alignItems="flex-start">
            <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <VStack spacing={3} alignItems="flex-start">
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
