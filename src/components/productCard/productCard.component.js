import { AddToCart } from '../addToCart/addToCart.component';
import { StyledCard, StyledDescription, StyledName, StyledPhoto, StyledPrice } from './productCard.styled';

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

  return (
    <StyledCard>
      <div onClick={event => onProductClick(id, event)}>
        <StyledPhoto src={photo} alt='' />
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice> ${price.toFixed(2)}</StyledPrice>

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
