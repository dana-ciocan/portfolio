import Link from 'next/link';
import { Flex, Button } from '@chakra-ui/react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const NavMenu = () => (
  <nav>
    <Flex justifyContent="space-between" p={7}>
      <Flex gap={2}>
        <Button>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Button>
        <Button>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Button>
        <Button>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Button>
      </Flex>
      <DarkModeToggle />
    </Flex>
  </nav>
);

export default NavMenu;
