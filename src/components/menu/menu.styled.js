import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background: #fff;
`;

const StyledLink = styled(Link)`
    margin-right: 30px;
    text-decoration: none;
    color: #03b6f5;
    font-weight: bold;
`;

const StyledMenuContainer = styled.div`
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0 20px 10px;
`;

const StyledMenuItems = styled.div`
    display: flex;
`;

const StyledSearchContainer = styled.div`
`;

const StyledSearchInput = styled.input`
`;

export { StyledContainer, StyledLink, StyledMenuContainer, StyledMenuItems, StyledSearchContainer, StyledSearchInput };
