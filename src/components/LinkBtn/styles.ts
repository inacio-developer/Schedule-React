import styled from 'styled-components';
import { Link as a } from 'react-router-dom';

const Link = styled(a)`
  width: 4rem;
  height: 4rem;
  padding: 2.2rem 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;

  transition: 0.6s ease-in-out;

  &:hover {
    background-color: rgba(0, 102, 204, 1);
  }
`;

const img = styled.img`
  max-width: 2rem;
`;

export { Link, img };
