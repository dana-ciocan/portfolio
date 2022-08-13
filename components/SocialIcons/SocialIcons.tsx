import { Icon } from '@chakra-ui/react';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Flex } from '@chakra-ui/react';

const SocialIcons = () => {
  return (
    <>
      <a href="https://twitter.com/danaiciocan">
        <Icon as={FiTwitter} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />
      </a>
      <a href="https://www.linkedin.com/in/danaciocan/">
        <Icon as={FiLinkedin} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} />
      </a>
    </>
  );
};

export default SocialIcons;
