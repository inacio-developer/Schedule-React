import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../Card';
import { RootReduceType } from '../../app/rootReduce';
import * as S from './styles';
import { Contact } from '../../types/contactType';

const List = () => {
  const contacts = useSelector((state: RootReduceType) => state.form.contacts);

  return (
    <S.List>
      {contacts.map((contact) => (
        <S.Item key={contact.id}>
          <Card {...contact} />
        </S.Item>
      ))}
    </S.List>
  );
};

export { List };
