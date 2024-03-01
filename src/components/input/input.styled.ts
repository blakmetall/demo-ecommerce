import styled from 'styled-components';

const StyledError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  margin-bottom: ${props => !props.hasError ? '20px' : '5px'};
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 15px;
  margin-bottom: 5px;
`;


export { StyledInput, StyledError, StyledLabel };
