import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledDescription = styled.div`
  font-size: 16px;
  margin-bottom: 25px;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 767px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const StyledName = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 1.8em;
  margin-bottom: 20px;
`;

const StyledPrice = styled.div`
  color: #03b6f5;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export { 
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledName,
  StyledPrice,
 };
