import { StyledContainer, StyledQuantityContainer, StyledQuantityInput } from './addToCart.styled.js';

export const AddToCart = ({ currentQuantity = 0, onUpdateQuantity, productId }) => {
  const handleOnClick = (event, newQuantity) => {
    event.preventDefault();
    event.stopPropagation();

    const cartNewQuantity = newQuantity < 0 ? 0 : newQuantity;

    onUpdateQuantity(productId, cartNewQuantity)
  }

  return (
    <StyledContainer onClick={handleOnClick}>
      <button onClick={(event) => handleOnClick(event, currentQuantity - 1)}>-</button>

      <StyledQuantityContainer>
        <StyledQuantityInput value={currentQuantity} readonly />
      </StyledQuantityContainer>

      <button onClick={(event) => handleOnClick(event, currentQuantity + 1)}>+</button>
    </StyledContainer>
  )
};