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
  const { hasProduct, product } = useProductViewModel(id);

  if (hasProduct) {
    const { name, price, description, photo } = product;

    return (
      <StyledContainer>
        <div>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
          <StyledPrice>${price.toFixed(2)}</StyledPrice>
        </div>

        <div>
          <StyledImage src={photo} alt='' />
        </div>
      </StyledContainer>
    )
  };

  return <div><h3>Product not found.</h3></div>
};