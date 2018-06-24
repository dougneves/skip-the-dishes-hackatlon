import { combineReducers } from 'redux';
import fetchData from './fetch-data-reducer';
import config from './config-reducer';

export default combineReducers({ fetchData, config });
