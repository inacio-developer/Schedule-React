import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.titleColor};
  font-size: 2rem;
  text-transform: uppercase;
  margin: 2rem 0;
  text-align: center;
`;

export { Title };
