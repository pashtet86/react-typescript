import axios          from 'axios';
import { Dispatch }   from 'redux';
import { ActionType } from '../action-types/index';
import { Action }     from '../actions';

// eslint-disable-next-line import/prefer-default-export
export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });

  try {
    const { data } = await axios.get(
      'https://registry.npmjs.org/-/v1/search',
      {
        params: {
          text: term,
        },
      },
    );

    const names = data.objects.map((result: any) => result.package.name);

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
};
