import styled from 'styled-components';

const Submit = styled.button`
  width: 100%;
  padding: 2rem 0;
  margin: 4rem 0;
  outline: none;
  border: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  transition: 0.6s ease-in-out;
  font-size: 1.8rem;
  color: white;
  font-weight: 800;

  &:hover {
    background-color: rgba(0, 102, 204, 1);
  }
`;

export { Submit };
