import { Reducer } from 'redux';
import { MovieState, MovieTypes } from './types';

const INITIAL_STATE: MovieState = {
  error: '',
  loading: false,
  data: [],
};

const reducer: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.LOAD_ALL_MOVIES:
      return { ...state, loading: true };
    case MovieTypes.LOAD_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    case MovieTypes.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;