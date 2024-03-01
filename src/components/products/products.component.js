import ProductCard from '../productCard/productCard.component.js';
import { StyledProductsContainer } from './products.styled.js';

export const Products = ({ onProductClick, onUpdateCartQuantity, products, productsInCart }) => {
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
              key={product.id}
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