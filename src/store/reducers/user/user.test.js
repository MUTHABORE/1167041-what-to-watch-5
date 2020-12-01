import {user} from './user.js';
import {ActionType} from '../../action.js';
import {checkAuth, login} from '../../api-actions.js';
import {extend} from '../../../util/utils.js';
import {state, noop, userMock} from '../../../test-data.js';
import {createAPI} from '../../../services/api.js';
import MockAdapter from 'axios-mock-adapter';
import {APIRoute, AppRoute, AuthorizationStatus} from '../../../util/const.js';

const api = createAPI(noop);

describe(`Should user work correctly with store`, () => {
  it(`user reducer without additional parameters should return initial state`, () => {
    expect(user(state.USER, {})).toEqual(state.USER);
  });

  it(`Reducer should change authorizationStatus`, () => {
    expect(user(state.USER, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `Status`,
    })).toEqual(extend(state.USER, {
      authorizationStatus: `Status`,
    }));
  });

  it(`Reducer should change user`, () => {
    expect(user(state.USER, {
      type: ActionType.LOAD_USER,
      payload: userMock,
    })).toEqual(extend(state.USER, {
      user: userMock,
    }));
  });
});

describe(`Should user async login work correctly`, () => {
  it(`Should make a correct API get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = checkAuth();

    apiMock
      .onGet(APIRoute.SIGN_IN)
      .reply(200, {fake: true});

    return authChecker(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_USER,
        payload: {fake: true},
      });
    });
  });

  it(`Should make a correct API post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `moo@moo.deep`, password: `88005553535`};
    const loginSender = login(fakeUser);

    apiMock
      .onPost(APIRoute.SIGN_IN)
      .reply(200, {fake: true});

    return loginSender(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_USER,
        payload: {fake: true},
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.ROOT,
      });
      expect(dispatch).toHaveBeenNthCalledWith(4, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
  });
});
