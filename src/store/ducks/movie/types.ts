/**
 * Action types
 */

export enum MovieTypes {
  LOAD_ALL_MOVIES = "@Movie/LOAD_ALL_MOVIES",
  LOAD_ALL_MOVIES_SUCCESS = "@Movie/LOAD_ALL_MOVIES_SUCCESS",
  REQUEST_FAILURE = "@Movie/REQUEST_FAILURE",
  SET_PROGRESS_INDEX = "@Movie/SET_PROGRESS_INDEX",
  SET_SELECTED_MOVIES = "@Movie/SET_SELECTED_MOVIES"
}

/**
 * Data types
 */


export interface Movie {
  id: number;
  title: string;
  releaseYear: string;
  score: number;
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
}
