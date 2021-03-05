import { ActionType }   from '../action-types/LoginActionTypes';
import { LoginActions } from '../actions/LoginActions';

interface LoginState {
  loading: boolean;
  error: string | null;
  token: string,
  form: {
    email: string,
    password: string,
  },
}

const defaultForm = {
  email: '',
  password: '',
};

const initialState = {
  loading: false,
  error: null,
  token: 'token',
  form: defaultForm,
};

const reducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        loading: true,
        error: null,
        token: '',
        form: defaultForm,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        token: action.payload,
        form: defaultForm,
      };
    case ActionType.LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        token: '',
        form: defaultForm,
      };
    case ActionType.LOGIN_UPDATE_FIELD:
      console.log(action.payload);

      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
