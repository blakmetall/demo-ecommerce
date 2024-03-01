import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: #fff;
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
  padding: 20px 0 20px 10px;
  width: 100%;
`;

const StyledMenuItems = styled.div`
  display: flex;
`;

const StyledSearchContainer = styled.div`
`;

const StyledSearchInput = styled.input`
  margin-left: 10px;
`;

export { 
  StyledContainer, 
  StyledLink, 
  StyledMenuContainer, 
  StyledMenuItems, 
  StyledSearchContainer, 
  StyledSearchInput,
 };
