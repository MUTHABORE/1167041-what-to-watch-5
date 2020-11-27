import {AuthorizationStatus} from '../../../util/const.js';
import {ActionType} from '../../action.js';
import {extend} from '../../../util/utils.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
