import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: #fff;
  padding: 0 30px;
`;

const StyledLink = styled(Link)`
  color: #03b6f5;
  font-weight: bold;
  margin-right: 30px;
  text-decoration: none;
`;

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
  padding: 20px 0;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledMenuItems = styled.div`
  display: flex;
`;

const StyledSearchContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
`;

const StyledSearchInput = styled.input`
  margin-left: 10px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const StyledSelect = styled.select`
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export { 
  StyledContainer, 
  StyledLink, 
  StyledMenuContainer, 
  StyledMenuItems, 
  StyledSearchContainer, 
  StyledSearchInput,
  StyledSelect,
 };
