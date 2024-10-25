import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0.6rem 0;
`;

const DivBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin: 1.2rem 0;
  text-transform: uppercase;
`;

const Span = styled.span`
  display: inline-flex;
  font-size: 1.2rem;
`;

const Icon = styled.img`
  max-width: 2rem;
  margin-right: 0.8rem;
`;

const Address = styled.address``;

const Time = styled.time`
  font-size: 1.2rem;
`;

const A = styled.a`
  margin: 1rem 0;
  color: rgba(245, 245, 245, 1);
  text-decoration: none;
`;

const Input = styled.input`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

export { Div, DivBetween, H2, Span, Icon, Address, Time, A, Input };
