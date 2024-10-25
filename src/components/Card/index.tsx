import * as S from './styles';
import { Contact } from '../../types/contactType';
import iconLocal from '../../img/icons/icon-locale.svg';
import iconDate from '../../img/icons/icon-calendar.svg';
import iconUser from '../../img/icons/icon-user.svg';
import iconPhone from '../../img/icons/icon-phone.svg';
import iconMail from '../../img/icons/icon-mail.svg';
import { useDispatch, useSelector } from 'react-redux';
import { check, insertEdit } from '../../features/form/formSlice';
import { RootReduceType } from '../../app/rootReduce';
import { useEffect, useState } from 'react';
import { Input } from '../Field_Edit';

const Card = (initialContact: Contact) => {
  const [contact, setContact] = useState(initialContact);
  const [checkbox, setCheckbox] = useState(false);
  const formState = useSelector((state: RootReduceType) => state.form);
  const isEditing = formState.editing.status;
  const isCompleted = formState.editing.completed;
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    setContact({ ...contact, check: !checkbox });
    dispatch(check(contact));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
  };

  useEffect(() => {
    dispatch(insertEdit(contact));
  }, [isCompleted]);

  return (
    <>
      <S.Input type="checkbox" disabled={isEditing} onClick={handleCheckbox} />
      <S.DivBetween>
        <S.Span>
          {checkbox && isEditing ? (
            <Input
              type={'text'}
              name={'local'}
              value={contact.local}
              onChange={handleInputChange}
            />
          ) : (
            <>
              <S.Div>
                <S.Icon src={iconLocal} alt="icon Local" />
                <S.Address>{contact.local}</S.Address>
              </S.Div>
            </>
          )}
        </S.Span>
        <S.Div>
          <S.Icon src={iconDate} alt="icon date" />
          <S.Time>{contact.date}</S.Time>
        </S.Div>
      </S.DivBetween>
      <S.Div>
        {checkbox && isEditing ? (
          <Input
            type={'text'}
            name={'name'}
            value={contact.name}
            onChange={handleInputChange}
          />
        ) : (
          <>
            <S.Icon src={iconUser} alt="icon user" />
            <S.H2>{contact.name}</S.H2>
          </>
        )}
      </S.Div>
      <S.Div>
        {checkbox && isEditing ? (
          <Input
            type={'text'}
            name={'tel'}
            value={contact.tel.replaceAll(' ', '').replace('+55', '')}
            maxlength={11}
            onChange={handleInputChange}
          />
        ) : (
          <>
            <S.Icon src={iconPhone} alt="icon phone" />
            <S.A href={`tel:+55${contact.tel}`}>{contact.tel}</S.A>
          </>
        )}
      </S.Div>
      <S.Div>
        {checkbox && isEditing ? (
          <Input
            type={'text'}
            name={'email'}
            value={contact.email}
            onChange={handleInputChange}
          />
        ) : (
          <>
            <S.Icon src={iconMail} alt="icon mail" />
            <S.A href={`mailto:${contact.email}`}>{contact.email}</S.A>
          </>
        )}
      </S.Div>
    </>
  );
};

export { Card };
