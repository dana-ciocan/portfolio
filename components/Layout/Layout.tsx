import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';
import NavMenu from '../NavMenu/NavMenu';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Dana: portfolio</title>
        <meta name="description" content="Dana Ciocan's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.xl">
        <NavMenu />
        <Flex h="100vh" py={[0, 10, 15, 20]}>
          <main>{children}</main>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
