import { action } from 'typesafe-actions';
import { MovieTypes, Movie } from './types';

export const loadAllMovies = () => action(MovieTypes.LOAD_ALL_MOVIES);
export const setProgressIndex = (index: number) => action(MovieTypes.SET_PROGRESS_INDEX, index);
export const setSelectedMovies = (movies: Movie[]) => action(MovieTypes.SET_SELECTED_MOVIES, movies);
export const loadAllMoviesSuccess = (movies: Movie[]) => action(MovieTypes.LOAD_ALL_MOVIES_SUCCESS, movies);
export const requestFailure = (error: string) => action(MovieTypes.REQUEST_FAILURE, error);
