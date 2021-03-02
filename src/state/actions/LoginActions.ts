import { ActionType } from '../action-types/LoginActionTypes';

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: string;
}

interface LoginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

export type LoginActions =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction;
