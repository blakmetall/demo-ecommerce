import { StyledTitle } from './title.styled.js';

export const Title = ({ label }) => {
  return (
    <>
      <StyledTitle>{label}</StyledTitle>
      <div />
    </>
  );
}