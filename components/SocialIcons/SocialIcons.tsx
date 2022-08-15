import { Icon } from '@chakra-ui/react';
import { FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi';
import { StyledSocialIcon } from './SocialIcons.styles';

const SocialIcons = () => {
  return (
    <>
      <StyledSocialIcon href="https://twitter.com/danaiciocan">
        <Icon as={FiTwitter} w={8} h={8} />
      </StyledSocialIcon>
      <StyledSocialIcon href="https://www.linkedin.com/in/danaciocan">
        <Icon as={FiLinkedin} w={8} h={8} />
      </StyledSocialIcon>
      <StyledSocialIcon href="https://codepen.io/dana-ciocan">
        <Icon as={FiCodepen} w={8} h={8} />
      </StyledSocialIcon>
    </>
  );
};

export default SocialIcons;
