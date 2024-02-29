import ProductCard from '../product-card/index.js';
import { StyledProductsContainer } from './products.styled.js';

export const ProductsComponent = ({ onProductClick, products }) => {
  const hasProducts = !!products.length;

  if (hasProducts) {
    return (
      <StyledProductsContainer>
        {products.map(product => 
          <ProductCard 
            {...product} 
            onProductClick={onProductClick} 
          />
        )}
      </StyledProductsContainer>
    )
  }

  return <div>Products not found.</div>;
};