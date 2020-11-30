import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import configurateMockState from 'redux-mock-store';
import {state, noop, routerProps} from '../../test-data';
import {Film} from './film.jsx';

const api = createAPI(noop);

const mockStore = configurateMockState([thunk.withExtraArgument(api)])(state);

test(`Should Film render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Film
              routerProps={routerProps}
              onPlayClick={noop}
              onMylistClick={noop}
              changeAmountMoviesToRenderAction={noop}
              moviesList={state.DATA.moviesList}
              changeMovieFavoriteStatusAction={noop}
              authorizationStatus={state.USER.authorizationStatus}
              userInfo={state.USER.user}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
