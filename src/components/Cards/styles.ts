import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
`;

const Item = styled.li`
  display: block;
  position: relative;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(30, 144, 255, 1),
    rgba(100, 149, 237, 1)
  );
  padding: 2rem;
  border-radius: 1rem;

  margin: 2rem 0;

  &:nth-child(even) {
    background-image: linear-gradient(
      to right,
      rgba(50, 205, 50, 1),
      rgba(0, 100, 0, 1)
    );
  }
`;

export { List, Item };
