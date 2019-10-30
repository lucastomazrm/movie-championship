import { action } from 'typesafe-actions';
import { MovieTypes, Movie } from './types';

export const loadAllMovies = () => action(MovieTypes.LOAD_ALL_MOVIES);
export const loadAllMoviesSuccess = (movies: Movie[]) => action(MovieTypes.LOAD_ALL_MOVIES_SUCCESS, movies);
export const requestFailure = (error: string) => action(MovieTypes.REQUEST_FAILURE, error);
