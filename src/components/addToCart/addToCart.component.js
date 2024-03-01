import { StyledContainer, StyledQuantityInput } from './addToCart.styled.js';

export const AddToCart = ({ currentQuantity = 0, onUpdateQuantity, productId }) => {
  const preventDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleOnClick = (event, newQuantity) => {
    preventDefault(event);

    const cartNewQuantity = newQuantity < 0 ? 0 : newQuantity;

    onUpdateQuantity(productId, cartNewQuantity)
  }

  return (
    <StyledContainer>
      <button onClick={(event) => handleOnClick(event, currentQuantity - 1)}>-</button>

      <StyledQuantityInput 
        onClick={(event) => preventDefault(event)}
        readOnly 
        value={currentQuantity} 
      />

      <button onClick={(event) => handleOnClick(event, currentQuantity + 1)}>+</button>
    </StyledContainer>
  )
};