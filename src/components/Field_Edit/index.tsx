import * as S from './styles';

type Props = {
  type: string;
  name: string;
  value: string;
  maxlength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, name, value, maxlength, onChange }: Props) => (
  <S.Input
    type={type}
    name={name}
    value={value}
    maxLength={maxlength}
    onChange={onChange}
    required
  />
);
export { Input };
