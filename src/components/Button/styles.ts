import styled from 'styled-components';

enum ActionType {
  DEL = 'DEL',
  EDIT = 'EDIT',
  SAVE = 'SAVE',
  CANCEL = 'CANCEL',
  DISABLED = 'DISABLED'
}

type ButtonAction = {
  action: ActionType;
};

const Div = styled.div`
  position: Fixed;
  left: 0;
  right: 0;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: rgba(60, 60, 60, 0.8);
  padding: 2rem;
`;

const Btn = styled.button<ButtonAction>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 1.6rem 0;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ action }) =>
    action === ActionType.DEL || action === ActionType.CANCEL
      ? 'rgba(235, 77, 75,1.0)'
      : action === ActionType.EDIT
        ? 'rgba(240, 147, 43,1.0)'
        : action === ActionType.DISABLED
          ? 'rgba(212, 213, 221, 1)'
          : 'rgba(106, 176, 76,1.0)'};

  color: ${({ theme }) => theme.textColor};
  letter-spacing: 0.2rem;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${({ action }) =>
      action === ActionType.DEL || action === ActionType.CANCEL
        ? 'rgba(255, 50, 50, 1.0)'
        : action === ActionType.EDIT
          ? 'rgba(225, 135, 39, 1.0)'
          : action === ActionType.DISABLED
            ? 'rgba(202, 203, 213, 1)'
            : 'rgba(88, 148, 63, 1.0)'};
    color: rgb(210, 210, 210);
  }
`;

export { Div, Btn, ActionType };
