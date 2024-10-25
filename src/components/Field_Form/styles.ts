import styled from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.textColorAlternative};
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  margin: 0rem 0;
  padding: 1.6rem 1rem;
  font-size: ${({ theme }) => theme.fontSize};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0.3rem;
`;

export { Label, Input };
