/**
 * Action types
 */

export enum MovieTypes {
  LOAD_ALL_MOVIES = "@Country/LOAD_ALL_MOVIES",
  LOAD_ALL_MOVIES_SUCCESS = "@Country/LOAD_ALL_MOVIES_SUCCESS",
  REQUEST_FAILURE = "@Country/REQUEST_FAILURE"
}

/**
 * Data types
 */


export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  score: number;
}

/**
 * State type
 */
export interface MovieState {
  readonly data: Movie[];
  readonly loading: boolean;
  readonly error: string;
}
