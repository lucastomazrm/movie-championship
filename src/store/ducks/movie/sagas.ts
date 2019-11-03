import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { push } from 'connected-react-router';
import {
  requestFailure, loadAllMoviesSuccess,
} from './actions';
import { Movie } from './types';
import FetchService, { ComonError } from '../../../services/FetchService';

const fetchApi = new FetchService('http://localhost:3001/');

export function* getMovies({ payload }: AnyAction) {
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
