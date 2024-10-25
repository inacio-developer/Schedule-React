import { useDispatch, useSelector } from 'react-redux';
import { RootReduceType } from '../../app/rootReduce';
import { Field } from '../Field_Form';
import { Submit } from '../Submit/';
import { Title } from '../Title_Form';
import { Btn, CommandType } from '../LinkBtn';

import * as S from './styles';
import { Contact } from '../../types/contactType';
import { useState } from 'react';
import { add } from '../../features/form/formSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const formState = useSelector((state: RootReduceType) => state.form.contacts);
  const date = new Date(Date.now());
  const [local, setLocal] = useState({
    city: '',
    state: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [model, setModel] = useState<Contact>({
    id: formState.length + 1,
    name: '',
    tel: '',
    email: '',
    date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
    local: '',
    check: false
  });

  const handleModelValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModel({ ...model, [name]: value });
  };

  const handleTelValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 11);
    setModel({ ...model, tel: value });
  };

  const handleFieldLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocal((prevLocal) => {
      const updatedLocal = { ...prevLocal, [name]: value };
      if (updatedLocal.city && updatedLocal.state) {
        setModel({
          ...model,
          local: `${updatedLocal.city}, ${updatedLocal.state}`
        });
      }
      return updatedLocal;
    });
  };

  const handleClickSubmit = (c: React.MouseEvent) => {
    c.preventDefault();

    if (
      model.name &&
      model.tel &&
      /\S+@\S+\.\S+/.test(model.email) &&
      model.local
    ) {
      dispatch(add(model));
      navigate('/');
    }
  };

  return (
    <>
      <Btn path="" command={CommandType.BACK} />
      <Title />
      <S.Form>
        <S.Div>
          <Field
            field="Name"
            type="text"
            name="name"
            onChange={handleModelValue}
            value={model.name}
          />
        </S.Div>
        <S.Div>
          <Field
            field="Phone: (AREA CODE NUMBER)"
            type="text"
            name="tel"
            maxLength={11}
            pattern="\d*"
            onChange={handleTelValue}
            value={model.tel}
          />
        </S.Div>
        <S.Div>
          <Field
            field="E-mail"
            type="email"
            name="email"
            onChange={handleModelValue}
            value={model.email}
          />
        </S.Div>
        <S.DivRow>
          <S.Div>
            <Field
              field="City"
              type="text"
              name="city"
              onChange={handleFieldLocal}
              value={local.city}
            />
          </S.Div>
          <S.Div>
            <Field
              field="State"
              type="text"
              name="state"
              maxLength={2}
              onChange={handleFieldLocal}
              value={local.state}
            />
          </S.Div>
        </S.DivRow>
        <Submit onClick={handleClickSubmit} />
      </S.Form>
    </>
  );
};

export { Form };
