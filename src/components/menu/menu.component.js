import { useLocation } from 'react-router-dom';
import { 
  StyledContainer, 
  StyledLink, 
  StyledMenuContainer, 
  StyledMenuItems, 
  StyledSearchContainer, 
  StyledSearchInput,
  StyledSelect,
} from './menu.styled.js';

export const Menu = ({ filter, search, onFilterChange, onSearchChange }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <StyledContainer>
      <StyledMenuContainer>
        <StyledMenuItems>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="cart">Cart</StyledLink>
          <StyledLink to="add-product">Add Product</StyledLink>
        </StyledMenuItems>

        {isHomepage ? (
          <StyledSearchContainer>
            <StyledSelect 
              onChange={event => onFilterChange(event.target.value)} 
              value={filter}
            >
              <option value=''>Sort Price DEFAULT</option>
              <option value='asc'>Sort Price ASC</option>
              <option value='desc'>Sort Price DESC</option>
            </StyledSelect>

            <StyledSearchInput 
              onChange={event => onSearchChange(event.target.value)}
              value={search} 
            />
          </StyledSearchContainer>
        ) : null}
      </StyledMenuContainer>
    </StyledContainer>
  )
};