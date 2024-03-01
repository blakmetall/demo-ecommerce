import { useParams } from 'react-router-dom';
import { useProductViewModel } from '../../store/viewModels/product.viewModel.ts';
import { 
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledName,
  StyledPrice,
} from './viewProduct.styled.js';

export const ViewProductPage = () => {
  const { id } = useParams();
  const { hasProduct, product } = useProductViewModel(id);

  if (hasProduct) {
    const { id, name, price, description, photo } = product;

    return (
      <StyledContainer>
        <StyledContent>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
          <StyledPrice>${price.toFixed(2)}</StyledPrice>
        </StyledContent>
        <StyledImageContainer>
          <StyledImage src={photo} alt='' />
        </StyledImageContainer>
      </StyledContainer>
    )
  };

  return <div><h3>Product not found.</h3></div>
};