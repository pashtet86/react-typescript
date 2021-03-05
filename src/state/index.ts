// collecting actions
import { searchRepositories } from './action-creators';
import { login, update }      from './action-creators/Login';

export const actionCreators = { searchRepositories, login, update };
export * from './store';
export * from './reducers';
