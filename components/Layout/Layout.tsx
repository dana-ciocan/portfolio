import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';
import NavMenu from '../NavMenu/NavMenu';
import SocialIcons from '../SocialIcons/SocialIcons';

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
        <Flex justifyContent="space-between">
          <Flex h="89vh" py={[0, 10, 15, 20]}>
            <main>{children}</main>
          </Flex>
          <Flex h="89vh" alignItems="flex-end">
            <SocialIcons />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
