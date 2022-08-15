import type { NextPage } from 'next';
import { VStack, Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
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
          <Text>Good {getTimeOfDay()}!</Text>
          <Heading size="xl">My name is Dana Ciocan</Heading>
          <Text>Welcome to my portfolio</Text>
          <Text>
            I love coding websites and I&rsquo;m always up for learning new
            things
          </Text>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default Home;
