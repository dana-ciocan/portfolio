import Head from 'next/head';
import { Container } from '@chakra-ui/react';
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
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
