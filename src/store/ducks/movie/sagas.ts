import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { push } from 'connected-react-router';
import {
  requestFailure, loadAllMoviesSuccess,
} from './actions';
import { Movie } from './types';
import FetchService, { ComonError } from '../../../services/FetchService';

const fetchApi = new FetchService('http://copafilmes.azurewebsites.net/api/');

export function* getMovies({ payload }: AnyAction) {
  try {
    let uri = 'filmes';
    const { data, error }: { data: Movie[]; error: ComonError } = yield call(fetchApi.get.bind(fetchApi), uri);
    if (error) {
      yield put(requestFailure(error.Message));
    } else {
      yield put(loadAllMoviesSuccess(data));
    }
  } catch (error) {
    yield put(requestFailure(error));
  }
}
