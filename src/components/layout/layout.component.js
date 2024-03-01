import { StyledContainer, StyledMain } from './layout.styled.js';
import { Menu } from '../menu/menu.component.js';
import { setSearch } from '../../store/slices/products.slice.ts';
import { useDispatch } from 'react-redux';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

function Layout({ children }) {
  const dispatch = useDispatch();
  const { search } = useProductsViewModel();

  return (
    <StyledMain>
      <Menu 
        onSearchChange={newSearch => dispatch(setSearch(newSearch))} 
        search={search} 
      />
      
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledMain>
  );
}

export default Layout;
