import home from './HomeReducers';
import about from './AboutReducers';
import header from './HeaderReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  about,
  header,
});

export default rootReducer;
