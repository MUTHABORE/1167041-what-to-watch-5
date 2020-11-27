import {combineReducers} from 'redux';
import {moviesFunctional} from './reducers/movies-functional/movies-functional.js';
import {moviesData} from './reducers/movies-data/movies-data.js';
import {user} from './reducers/user/user.js';

export const NameSpace = {
  DATA: `DATA`,
  FUNCTIONAL: `FUNCTIONAL`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.FUNCTIONAL]: moviesFunctional,
  [NameSpace.USER]: user,
});
