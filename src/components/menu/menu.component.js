import { StyledContainer, StyledLink, StyledMenuContainer, StyledMenuItems, StyledSearchContainer, StyledSearchInput } from './menu.styled.js';

export const MenuComponent = () => {
  return (
    <StyledContainer>
      <StyledMenuContainer>
        <StyledMenuItems>
          <StyledLink href="">Cart</StyledLink>
          <StyledLink href="">Add Product</StyledLink>
        </StyledMenuItems>
        <StyledSearchContainer>
          <StyledSearchInput />
        </StyledSearchContainer>
      </StyledMenuContainer>
    </StyledContainer>
  )
};