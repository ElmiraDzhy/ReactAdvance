import { CONSTANTS } from "../constants";

const { ACTIONSTYPES } = CONSTANTS;

export const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  birthday: new Date(),
  isFetching: false,
  error: null,
};

export  function reducer( state, action ) {
  switch (action.type) {
    case 'firstName':
    case 'lastName':
    case 'email':
    case 'password': {
      return {
        ...state,
        [action.type]: action.value,
      };
    }
    case 'birthday': {
      return {
        ...state,
        [action.type]: new Date(action.value),
      };
    }
    case ACTIONSTYPES.RESET: {
      return INITIAL_STATE;
    }

    case ACTIONSTYPES.LOAD: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTIONSTYPES.LOADSUCCESS: {
      return {
        ...state,
        ...action.value,
        birthday: new Date(action.value.birthday),
        isFetching: false,
      };
    }
    case ACTIONSTYPES.ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.value,
      };
    }

    default: {
      return state;
    }
  }
}