import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import movies from './movie';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  movies,
});
