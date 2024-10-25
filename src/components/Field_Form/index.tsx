import * as S from './styles';

type Props = {
  field: string;
  type: string;
  name: string;
  maxLength?: number;
  pattern?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Field = ({
  field,
  type,
  name,
  maxLength,
  pattern,
  onChange,
  value
}: Props) => {
  return (
    <>
      <S.Label htmlFor={name}>{field} </S.Label>
      <S.Input
        required
        type={type}
        name={name}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export { Field };
