import * as S from './styles';
import iconAdd from '../../img/icons/icon-add.svg';
import iconBack from '../../img/icons/icon-back.svg';

enum CommandType {
  'ADD' = 'add',
  'BACK' = 'back'
}

type Props = {
  path: string;
  command: CommandType;
};

const Btn = ({ path, command }: Props) => {
  const icons = {
    add: iconAdd,
    back: iconBack
  };

  return (
    <>
      <S.Link to={`/${path}`}>
        <S.img src={icons[command]} alt={`icon ${command}`} />
      </S.Link>
    </>
  );
};

export { Btn, CommandType };
