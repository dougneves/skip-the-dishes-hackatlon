import { CONFIG } from '../utils/action-types';

const DEFAULT_STATE = {
  itensPerCall: 0,
  itensPerPage: 0
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CONFIG:
      return {
        ...state,
        itensPerCall: action.payload.itensPerCall,
        itensPerPage: action.payload.itensPerPage
      };
    default:
      return state;
  }
}
