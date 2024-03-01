import { AddToCart } from '../../components/addToCart/addToCart.component.js';
import { StyledPriceInCart } from '../../components/productCard/productCard.styled.js';
import { updateProductInCart } from '../../store/slices/cart.slice.ts';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useProductViewModel } from '../../store/viewModels/product.viewModel.ts';

import { 
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledName,
  StyledPrice,
} from './viewProduct.styled.js';

export const ViewProductPage = () => {
  const { id } = useParams();
  const { cartQuantity, hasProduct, product } = useProductViewModel(id);

  const dispatch = useDispatch();

  const handleOnUpdateCartQuantity = (productId, quantity) => {
    dispatch(updateProductInCart({
      id: Number(productId),
      quantity,
    }))
  };

  if (hasProduct) {
    const { name, price, description, photo } = product;
    const itemSubtotal = price * cartQuantity;

    return (
      <StyledContainer>
        <div>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
          <StyledPrice>
            ${price.toFixed(2)}

            {cartQuantity > 0 ? (
              <StyledPriceInCart>
                / ${itemSubtotal.toFixed(2)}
              </StyledPriceInCart>
            ) : null}
          </StyledPrice>

          <AddToCart 
            currentQuantity={cartQuantity}
            productId={id}
            onUpdateQuantity={handleOnUpdateCartQuantity}
          />
        </div>

        <div>
          <StyledImage src={photo} alt='' />
        </div>
      </StyledContainer>
    )
  };

  return <div><h3>Product not found.</h3></div>
};