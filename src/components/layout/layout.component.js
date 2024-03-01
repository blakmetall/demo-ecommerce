import { StyledContainer, StyledMain } from './layout.styled.js';
import { Menu } from '../menu/menu.component.js';
import { setFilter, setSearch } from '../../store/slices/products.slice.ts';
import { useDispatch } from 'react-redux';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

function Layout({ children }) {
  const dispatch = useDispatch();
  const { filter, search } = useProductsViewModel();

  return (
    <StyledMain>
      <Menu 
        filter={filter}
        onFilterChange={newFilter => dispatch(setFilter(newFilter))}
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
