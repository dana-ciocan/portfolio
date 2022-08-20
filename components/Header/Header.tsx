import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  background-image: url('/space-background.jpg');
  background-size: cover;
  background-clip: text;
  color: transparent;
  background-position: 0 30%;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: powderblue;

  h1 {
    line-height: 1.5;
  }
`;

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <StyledHeader>{children}</StyledHeader>
);

export default Header;
