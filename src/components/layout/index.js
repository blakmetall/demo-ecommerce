import { StyledContainer } from './styled';

function Layout({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Layout;
