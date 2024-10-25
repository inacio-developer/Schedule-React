import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export { Input };
