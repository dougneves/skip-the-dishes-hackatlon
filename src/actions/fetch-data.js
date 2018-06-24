import { FETCH_DATA } from '../utils/action-types';

export const fetchData = ({ latitude, longitude }) => {
  return {
    type: FETCH_DATA,
    payload: new Promise(resolve => {
      window.setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => [
      { name: 'Item number 1' },
      { name: 'Item number 2' },
      { name: 'Item number 3' },
      { name: 'Item number 4' },
      { name: 'Item number 5' },
      { name: 'Item number 6' },
      { name: 'Item number 7' },
      { name: 'Item number 8' },
      { name: 'Item number 9' },
      { name: 'Item number 10' }
    ])
  };
};
