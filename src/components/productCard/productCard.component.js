import { AddToCart } from '../addToCart/addToCart.component';
import { StyledCard, StyledDescription, StyledName, StyledPhoto, StyledPrice, StyledPriceInCart } from './productCard.styled';

function ProductCard(props) {
  const { 
    currentQuantity,
    description, 
    id, 
    name, 
    photo, 
    price, 
    onProductClick, 
    onUpdateCartQuantity, 
  } = props;
  const itemSubtotal = price * currentQuantity;

  return (
    <StyledCard>
      <div onClick={event => onProductClick(id, event)}>
        <StyledPhoto src={photo} alt='' />
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice>
          ${price.toFixed(2)}
          
          {currentQuantity > 0 ? (
            <StyledPriceInCart>
              / ${itemSubtotal.toFixed(2)}
            </StyledPriceInCart>
          ) : null}
        </StyledPrice>

        <AddToCart 
          currentQuantity={currentQuantity} 
          onUpdateQuantity={onUpdateCartQuantity} 
          productId={id}
        />
      </div>
    </StyledCard>
  );
}

export default ProductCard;
