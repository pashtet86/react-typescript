// collecting actions
import { searchRepositories } from './action-creators';
import { login } from './action-creators/Login';

export const actionCreators = { searchRepositories, login };
export * from './store';
export * from './reducers';
