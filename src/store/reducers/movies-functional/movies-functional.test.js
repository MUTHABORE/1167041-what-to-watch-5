import {moviesFunctional} from './movies-functional.js';
import {ActionType} from '../../action.js';
import {extend} from '../../../util/utils.js';
import {state} from '../../../test-data.js';

describe(`Is the moviesFunctional reducer working right`, () => {
  it(`moviesFunctional reducer without additional parameters should return initial state`, () => {
    expect(moviesFunctional(state.FUNCTIONAL, {})).toEqual(state.FUNCTIONAL);
  });

  it(`Reducer should change activeGenre`, () => {
    expect(moviesFunctional(state.FUNCTIONAL, {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Action`,
    })).toEqual(extend(state.FUNCTIONAL, {
      activeGenre: `Action`,
    }));
  });

  it(`Reducer should change amountMoviesToRender`, () => {
    expect(moviesFunctional(state.FUNCTIONAL, {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 88005553535,
    })).toEqual(extend(state.FUNCTIONAL, {
      amountMoviesToRender: 88005553535,
    }));
  });
});

