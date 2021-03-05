import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';
import loginPageReducers   from './loginReducers';

const reducers = combineReducers({
  repositories: repositoriesReducer,
  login: loginPageReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
