import Head from 'next/head';
import { Grid, GridItem, Flex, Container } from '@chakra-ui/react';
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
      <Container maxWidth="container.xl">
        <Grid
          h="100vh"
          templateRows="5rem auto 2rem"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem colSpan={12}>
            <NavMenu />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 11 }}>
            <main>{children}</main>
          </GridItem>
          <GridItem rowSpan={2} colSpan={{ base: 12, md: 1 }}>
            <Flex
              justifyContent={{ base: 'center', md: 'flex-end' }}
              alignItems={{ base: 'flex-end', md: 'center' }}
              flexDirection={{ base: 'row', md: 'column' }}
              minHeight="100%"
              py={2}
              rowGap={{ base: 0, md: 2 }}
              gap={{ base: 2, md: 0 }}
            >
              <SocialIcons />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
