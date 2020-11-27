import {extend} from '../../../util/utils.js';
import {ActionType} from '../../action';

import {getAvailableMoviesGenres} from '../../selectors.js';

const initialState = {
  moviesList: [],
  genresList: [],
  reviews: [],
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        moviesList: action.payload,
        genresList: Array.from(getAvailableMoviesGenres({moviesList: action.payload})),
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {moviesData};
