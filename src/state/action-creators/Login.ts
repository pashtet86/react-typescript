// import axios            from 'axios';
import { Dispatch }     from 'redux';
import { ActionType }   from '../action-types/LoginActionTypes';
import { LoginActions } from '../actions/LoginActions';

interface LoginPayload {
  email: string,
  password: string,
}

interface FieldPayload {
  value: string,
  name: string,
}

export const login = (payload: LoginPayload) => async (dispatch: Dispatch<LoginActions>) => {
  dispatch({
    type: ActionType.LOGIN,
  });

  console.log(payload);
  try {
    // const { data } = await axios.get(
    //   'https://registry.npmjs.org/-/v1/search',
    //   {
    //     params: {
    //       text: term,
    //     },
    //   }
    // );

    // const names = data.objects.map((result: any) => {
    //   return result.package.name;
    // });
    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: 'success',
    });
  } catch (err) {
    dispatch({
      type: ActionType.LOGIN_ERROR,
      payload: err.message,
    });
  }
};

export const update = (payload: FieldPayload) => async (dispatch: Dispatch<LoginActions>) => {
  dispatch({
    type: ActionType.LOGIN_UPDATE_FIELD,
    payload,
  });
};
