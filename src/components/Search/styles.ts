import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 2.2rem 1.5rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0.6rem;
`;

export { Input };
