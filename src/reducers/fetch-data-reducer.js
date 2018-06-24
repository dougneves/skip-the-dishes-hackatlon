import {
  FETCH_DATA,
  _PENDING,
  _FULFILLED,
  _REJECTED
} from '../utils/action-types';

const DEFAULT_STATE = {
  fetched: false,
  fetching: false,
  list: [],
  error: false,
  errorMessage: ''
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA + _PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false
      };
    case FETCH_DATA + _FULFILLED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        error: false,
        list: action.payload
      };
    case FETCH_DATA + _REJECTED:
      return {
        ...state,
        fetched: false,
        fetching: false,
        error: true,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
}
