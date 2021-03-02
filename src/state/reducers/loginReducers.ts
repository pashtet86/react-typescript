import { ActionType } from '../action-types/LoginActionTypes';
import { LoginActions } from '../actions/LoginActions';

interface LoginState {
  loading: boolean;
  error: string | null;
  token: string,
}

const initialState = {
  loading: false,
  error: null,
  token: 'token',
};

const reducer = ( state: LoginState = initialState, action: LoginActions ): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        loading: true,
        error: null,
        token: ''
      }; 
    case ActionType.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        token: action.payload
      };
    case ActionType.LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
        token: ''
      };
    default:
      return state;
  }
};

export default reducer;
