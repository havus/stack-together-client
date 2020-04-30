import { combineReducers } from 'redux';
import { questions } from './question';
import { users } from './user';

const allReducers = combineReducers({
  questions,
  users,
});

export default allReducers;
