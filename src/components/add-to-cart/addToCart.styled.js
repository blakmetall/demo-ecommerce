import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button``;

const StyledContainer = styled.div`
    display: flex;
`;

const StyledQuantityContainer = styled(Link)`
    margin: 0px 0 0 10px;
    max-width: 100px;
    width: 100%;
`;

const StyledQuantityInput = styled.input`
    max-width: 80px;
`;

export { StyledButton, StyledContainer, StyledQuantityContainer, StyledQuantityInput };
