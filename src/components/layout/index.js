import { MenuComponent } from '../menu/menu.component';
import { setSearch } from '../../store/slices/products.slice.ts';
import { StyledContainer, StyledMain } from './styled';
import { useDispatch } from 'react-redux';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

function Layout({ children }) {
  const dispatch = useDispatch();

  const { search } = useProductsViewModel();

  const handleOnSearchChange = (newSearch) => {
    dispatch(setSearch(newSearch));
  };

  return (
    <StyledMain>
      <MenuComponent 
        onSearchChange={handleOnSearchChange} 
        search={search} 
      />
      
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledMain>
  );
}

export default Layout;
