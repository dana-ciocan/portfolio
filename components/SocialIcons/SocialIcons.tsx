import { Icon } from '@chakra-ui/react';
import { FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi';
import { StyledSocialIcon } from './SocialIcons.styles';

const SocialIcons = () => {
  return (
    <>
      <StyledSocialIcon
        href="https://twitter.com/danaiciocan"
        target="_blank"
        rel="noreferrer"
      >
        <Icon as={FiTwitter} w={8} h={8} />
      </StyledSocialIcon>
      <StyledSocialIcon
        href="https://www.linkedin.com/in/danaciocan"
        target="_blank"
        rel="noreferrer"
      >
        <Icon as={FiLinkedin} w={8} h={8} />
      </StyledSocialIcon>
      <StyledSocialIcon
        href="https://codepen.io/dana-ciocan"
        target="_blank"
        rel="noreferrer"
      >
        <Icon as={FiCodepen} w={8} h={8} />
      </StyledSocialIcon>
    </>
  );
};

export default SocialIcons;
