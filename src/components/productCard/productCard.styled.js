import { Card } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  padding: 25px;
  width: 290px;

  &:hover {
      cursor: pointer;
  }
`;

const StyledName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const StyledDescription = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const StyledPrice = styled.div`
  color: #03b6f5;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const StyledPriceInCart = styled.span`
  color: #333;
  padding-left: 5px;
`;

const StyledPhoto = styled.img`
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

export { StyledCard, StyledName, StyledDescription, StyledPrice, StyledPriceInCart, StyledPhoto };
