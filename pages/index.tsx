import type { NextPage } from 'next';
import { VStack, Text, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import { getTimeOfDay } from '../utils/get-time-of-day';

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack
        w="full"
        h="full"
        py={[0, 5, 10]}
        spacing={5}
        alignItems="flex-start"
      >
        <VStack spacing={10} alignItems="flex-start">
          <Header>
            <Heading size="2xl" as="h1">
              Welcome to my portfolio
            </Heading>
          </Header>
          <Text>Good {getTimeOfDay()}, I&rsquo;m Dana!</Text>
          <Text size="lg">I love coding and learning new things</Text>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default Home;
