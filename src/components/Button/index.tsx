import { useDispatch, useSelector } from 'react-redux';
import { confirmEdit, edit, remove } from '../../features/form/formSlice';
import * as S from './styles';
import { RootReduceType } from '../../app/rootReduce';

const Button = () => {
  const dispatch = useDispatch();

  const formState = useSelector((state: RootReduceType) => state.form);
  const checkState = formState.check;
  const checkEditing = formState.editing.status;

  const disabledAttr: boolean = checkState.count != 1;
  const actionTypeEdit: S.ActionType = !disabledAttr
    ? S.ActionType.EDIT
    : S.ActionType.DISABLED;

  const handleEdit = () => {
    dispatch(edit());
  };

  const handleDel = () => {
    dispatch(remove());
  };

  const handleConfirmEdit = () => {
    dispatch(confirmEdit());
  };

  return (
    <>
      {checkState.status && (
        <>
          <S.Div>
            {!checkEditing && (
              <>
                <S.Btn
                  onClick={handleEdit}
                  action={actionTypeEdit}
                  disabled={disabledAttr}
                >
                  edit
                </S.Btn>
                <S.Btn onClick={handleDel} action={S.ActionType.DEL}>
                  Delete ({checkState.count})
                </S.Btn>
              </>
            )}
            {checkEditing && !disabledAttr && (
              <>
                <S.Btn onClick={handleConfirmEdit} action={S.ActionType.SAVE}>
                  Confirm
                </S.Btn>
                <S.Btn onClick={handleEdit} action={S.ActionType.CANCEL}>
                  Cancel
                </S.Btn>
              </>
            )}
          </S.Div>
        </>
      )}
    </>
  );
};

export { Button };
