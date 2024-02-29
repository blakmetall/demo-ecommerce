import { StyledContainer, StyledLink, StyledMenuContainer, StyledMenuItems, StyledSearchContainer, StyledSearchInput } from './menu.styled.js';

export const MenuComponent = () => {
  return (
    <StyledContainer>
      <StyledMenuContainer>
        <StyledMenuItems>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="cart">Cart</StyledLink>
          <StyledLink to="add-product">Add Product</StyledLink>
        </StyledMenuItems>
        <StyledSearchContainer>
          <StyledSearchInput />
        </StyledSearchContainer>
      </StyledMenuContainer>
    </StyledContainer>
  )
};