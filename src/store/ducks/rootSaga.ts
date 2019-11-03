import { all, takeLatest } from 'redux-saga/effects';
import { MovieTypes } from './movie/types';
import { getMovies, getGroups } from './movie/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(MovieTypes.LOAD_ALL_MOVIES, getMovies),
    takeLatest(MovieTypes.LOAD_GROUPS, getGroups),
  ]);
}
