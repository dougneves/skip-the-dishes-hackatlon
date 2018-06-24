import { FETCH_DATA } from '../utils/action-types';
import { CONFIG } from '../utils/action-types';

export const fetchData = ({ itensPerCall, itensPerPage }) => {
  return dispatch => {
    dispatch({
      type: CONFIG,
      payload: { itensPerCall, itensPerPage }
    });

    const arr = [];
    for (let i = 0; i < itensPerCall; i++)
      arr.push({ name: `Item number ${i}` });

    dispatch({
      type: FETCH_DATA,
      payload: new Promise(resolve => {
        window.setTimeout(() => {
          resolve();
        }, 2000);
      }).then(() => {
        return {
          itens: arr,
          haveMoreItens: true
        };
      })
    });
  };
};
