import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import {
  requestFailure, loadAllMoviesSuccess, loadGroupsSuccess,
} from './actions';
import { Movie, MovieGroup } from './types';
import FetchService from '../../../services/FetchService';

const fetchApi = new FetchService('http://localhost:3001/');

export function* getMovies() {
  try {
    const { data, error }: { data: Movie[]; error: any } = yield call(
      fetchApi.get.bind(fetchApi), 'movies');
    if (error) {
      yield put(requestFailure(error));
    } else {
      yield put(loadAllMoviesSuccess(data));
    }
  } catch (error) {
    yield put(requestFailure(error));
  }
}

export function* getGroups({ payload }: AnyAction) {
  try {
    const { data, error }: { data: MovieGroup[]; error: any } = yield call(
      fetchApi.post.bind(fetchApi),
      `movies/${payload.step}`,
      payload.movies,
    );
    if (error) {
      yield put(requestFailure(error));
    } else {
      yield put(loadGroupsSuccess(data));
    }
  } catch (error) {
    yield put(requestFailure(error));
  }
}
