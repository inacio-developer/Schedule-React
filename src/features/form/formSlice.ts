import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types/contactType';

type Check = {
  status: boolean;
  count: number;
};

type Editing = {
  status: boolean;
  completed: boolean;
};

type State = {
  contacts: Contact[];
  check: Check;
  editing: Editing;
};

const initialState: State = {
  contacts: [],
  check: {
    status: false,
    count: 0
  },

  editing: {
    status: false,
    completed: false
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    add: (state: State, action: PayloadAction<Contact>) => {
      const configTel = action.payload.tel.replace('/^55/', '');
      const telCode = '+55 ' + configTel.slice(0, 2) + ' ';
      const telNumber = configTel.slice(2, 11);

      const newContact: Contact = {
        ...action.payload,
        tel: telCode + telNumber
      };

      state.contacts.push(newContact);
    },
    remove: (state: State) => {
      const ids: number[] = state.contacts
        .filter((c) => c.check)
        .map((c) => c.id);

      const newList: Contact[] = [...state.contacts];

      ids.map((id) =>
        newList.filter((c, i) => {
          if (c.id == id) newList.splice(i, 1);
        })
      );

      state.contacts = newList;
      state.check.status = false;
    },

    edit: (state) => {
      state.editing.status = !state.editing.status;
    },

    confirmEdit: (state) => {
      state.editing.completed = true;
    },

    insertEdit: (state, action: PayloadAction<Contact>) => {
      const id = action.payload.id;
      const i = state.contacts.findIndex((c) => c.id === id);

      state.contacts[i] = action.payload;

      state.editing.status = false;
      state.editing.completed = false;
    },

    check: (state: State, action: PayloadAction<Contact>) => {
      const idContact = action.payload.id;
      const i = state.contacts.findIndex((contact) => contact.id === idContact);
      state.contacts[i].check = !state.contacts[i].check;

      const withCheck = state.contacts.filter((contact) => contact.check);

      state.check.status = withCheck.length > 0 ? true : false;
      state.check.count = withCheck.length;
    }
  }
});

export const { add, remove, edit, confirmEdit, insertEdit, check } =
  formSlice.actions;

export default formSlice.reducer;
