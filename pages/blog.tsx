import type { NextPage } from 'next';
import { Container, Flex, VStack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';

const Blog: NextPage = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Flex h="100vh" py="20">
          <VStack w="full" h="full" p={10} spacing={5} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
              <Text>This is the blog page</Text>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Blog;
