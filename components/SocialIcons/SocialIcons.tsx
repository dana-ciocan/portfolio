import { Icon } from '@chakra-ui/react';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Flex } from '@chakra-ui/react';

const SocialIcons = () => {
  return (
    <Flex flexDirection="column" gap={2}>
      <a href="https://twitter.com/danaiciocan">
        <Icon as={FiTwitter} w={6} h={6} />
      </a>
      <a href="https://www.linkedin.com/in/danaciocan/">
        <Icon as={FiLinkedin} w={6} h={6} />
      </a>
    </Flex>
  );
};

export default SocialIcons;
