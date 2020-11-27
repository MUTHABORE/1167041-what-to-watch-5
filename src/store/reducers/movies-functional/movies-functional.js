import {extend} from '../../../util/utils.js';
import {ActionType} from '../../action';

import {AMOUNT_MOVIES_TO_RENDER, AuthorizationStatus} from '../../../util/const.js';

const initialState = {
  activeGenre: `All genres`,
  amountMoviesToRender: AMOUNT_MOVIES_TO_RENDER,
  isAuthorized: AuthorizationStatus.NO_AUTH,
};

const moviesFunctional = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        amountMoviesToRender: action.payload,
      });
  }

  return state;
};

export {moviesFunctional};
