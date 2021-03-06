
/**
 * Action types
 */

export enum MovieTypes {
  LOAD_ALL_MOVIES = "@Movie/LOAD_ALL_MOVIES",
  LOAD_ALL_MOVIES_SUCCESS = "@Movie/LOAD_ALL_MOVIES_SUCCESS",
  REQUEST_FAILURE = "@Movie/REQUEST_FAILURE",
  SET_PROGRESS_INDEX = "@Movie/SET_PROGRESS_INDEX",
  SET_SELECTED_MOVIES = "@Movie/SET_SELECTED_MOVIES",
  LOAD_GROUPS = "@Movie/LOAD_GROUPS",
  LOAD_GROUPS_SUCCESS = "@Movie/LOAD_GROUPS_SUCCESS",
  CLEAR_GROUPS = "@Movie/CLEAR_GROUPS",
}

/**
 * Data types
 */

export interface Movie {
  id: string;
  title: string;
  releaseYear: number;
  score: number;
}

export interface MovieGroup {
  movies: Movie[];
}

/**
 * State type
 */
export interface MovieState {
  readonly data: Movie[];
  readonly loading: boolean;
  readonly error: string;
  readonly progressIndex: number;
  readonly selectedMovies: Movie[];
  readonly groups: MovieGroup[];
}
