import ProductCard from '../product-card/index.js';
import { StyledProductsContainer } from './products.styled.js';

export const ProductsComponent = ({ onProductClick, onUpdateCartQuantity, products, productsInCart }) => {
  const hasProducts = !!products.length;

  if (hasProducts) {
    return (
      <StyledProductsContainer>
        {products.map(product => {
          const productFoundInCart = productsInCart.find(inCart => inCart.id === product.id);
          const hasProductInCart = !!productFoundInCart;
          const quantity = hasProductInCart ? productFoundInCart.quantity : 0;

          return (
            <ProductCard 
              {...product} 
              currentQuantity={quantity}
              onProductClick={onProductClick}
              onUpdateCartQuantity={onUpdateCartQuantity} 
            />
          );
        })}
      </StyledProductsContainer>
    )
  }

  return <div>Products not found.</div>;
};