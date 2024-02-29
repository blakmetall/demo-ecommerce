import { MenuComponent } from '../menu/menu.component';
import { StyledContainer, StyledMain } from './styled';

function Layout({ children }) {
  return (
    <StyledMain>
      <MenuComponent />
      
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledMain>
  );
}

export default Layout;
