import { StyledCard, StyledName, StyledDescription, StyledPrice, StyledPhoto } from './styled';

function ProductCard(props) {
  const { id, name, description, price, photo, onProductClick } = props;

  return (
    <StyledCard>
      <div onClick={event => onProductClick(id, event)}>
        <StyledPhoto src={photo} />
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice> ${price.toFixed(2)}</StyledPrice>
      </div>
    </StyledCard>
  );
}

export default ProductCard;
