import { FETCH_DATA, CONFIG, _CLEAR } from '../utils/action-types';

let currentItensCount = 0;

export const fetchData = ({ itensPerCall, itensPerPage, clearData }) => {
  return dispatch => {
    if (clearData) {
      currentItensCount = 0;
      dispatch({
        type: FETCH_DATA + _CLEAR
      });
    }
    dispatch({
      type: CONFIG,
      payload: { itensPerCall, itensPerPage }
    });

    const arr = [];
    for (let i = 0; i < itensPerCall; i++)
      arr.push({
        name: `This is the fetched item number ${++currentItensCount}`
      });

    dispatch({
      type: FETCH_DATA,
      payload: new Promise(resolve => {
        window.setTimeout(() => {
          resolve();
        }, 500);
      }).then(() => {
        return {
          itens: arr,
          haveMoreItens: true
        };
      })
    });
  };
};
