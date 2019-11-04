import { action } from 'typesafe-actions';
import { MovieTypes, Movie, MovieGroup } from './types';

export const loadAllMovies = () => action(MovieTypes.LOAD_ALL_MOVIES);
export const setSelectedMovies = (movies: Movie[]) => action(MovieTypes.SET_SELECTED_MOVIES, movies);
export const loadAllMoviesSuccess = (movies: Movie[]) => action(MovieTypes.LOAD_ALL_MOVIES_SUCCESS, movies);
export const requestFailure = (error: string) => action(MovieTypes.REQUEST_FAILURE, error);
export const setProgressIndex = (index: number) => action(MovieTypes.SET_PROGRESS_INDEX, index);
export const clearGroups = () => action(MovieTypes.CLEAR_GROUPS);
export const loadGroups = (movies: Movie[] | MovieGroup[], step: string) => action(MovieTypes.LOAD_GROUPS, { movies: movies, step });
export const loadGroupsSuccess = (groups: MovieGroup[]) => action(MovieTypes.LOAD_GROUPS_SUCCESS, groups);
