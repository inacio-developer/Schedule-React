import * as S from './styles';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Submit = ({ onClick }: Props) => (
  <S.Submit onClick={onClick}>SUBMIT</S.Submit>
);

export { Submit };
