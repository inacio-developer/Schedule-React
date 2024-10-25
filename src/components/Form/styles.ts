import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
`;

const DivRow = styled(Div)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  Div {
    width: 100%;
    margin-top: 0;
  }
`;

export { Form, Div, DivRow };
