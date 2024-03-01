import { StyledContainer, StyledLink, StyledMenuContainer, StyledMenuItems, StyledSearchContainer, StyledSearchInput } from './menu.styled.js';

export const MenuComponent = ({ search, onSearchChange }) => {
  return (
    <StyledContainer>
      <StyledMenuContainer>
        <StyledMenuItems>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="cart">Cart</StyledLink>
          <StyledLink to="add-product">Add Product</StyledLink>
        </StyledMenuItems>

        <StyledSearchContainer>
          <StyledSearchInput 
            onChange={event => onSearchChange(event.target.value)}
            value={search} 
          />
        </StyledSearchContainer>
      </StyledMenuContainer>
    </StyledContainer>
  )
};