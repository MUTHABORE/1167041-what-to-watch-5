import {AuthorizationStatus} from '../../../util/const.js';
import {ActionType} from '../../action.js';
import {extend} from '../../../util/utils.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

export {user};
