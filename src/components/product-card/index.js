import { StyledCard, StyledName, StyledDescription, StyledPrice, StyledPhoto } from './styled';

function ProductCard({ id, name, description, price, photo, onSelect }) {
  return (
    <StyledCard onClick={onSelect}>
      <StyledPhoto src={photo} />
      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
      <StyledPrice> ${price.toFixed(2)}</StyledPrice>
    </StyledCard>
  );
}

export default ProductCard;
