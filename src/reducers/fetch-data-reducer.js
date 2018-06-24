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
  haveMoreItens: false,
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
        error: false,
        haveMoreItens: false
      };
    case FETCH_DATA + _FULFILLED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        error: false,
        list: state.list.concat(action.payload.itens),
        haveMoreItens: action.payload.haveMoreItens
      };
    case FETCH_DATA + _REJECTED:
      return {
        ...state,
        fetched: false,
        fetching: false,
        error: true,
        errorMessage: action.payload.errorMessage,
        haveMoreItens: false
      };
    default:
      return state;
  }
}
