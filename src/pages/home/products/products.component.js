import ProductCard from '../../../components/product-card/index.js';
import { StyledProductsContainer } from './products.styled.js';

export const ProductsComponent = ({ products }) => {
  return (
    <StyledProductsContainer>
      {products.length ? products.map(product => <ProductCard {...product} />) : null}
    </StyledProductsContainer>
  )
};