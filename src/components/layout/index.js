import { StyledContainer, StyledMain } from './styled';

function Layout({ children }) {
  return (
    <StyledMain>
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledMain>
  );
}

export default Layout;
