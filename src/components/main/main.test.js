import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configurateMockState from 'redux-mock-store';
import {state, noop} from '../../test-data';
import {Main} from './main.jsx';

const mockStore = configurateMockState()(state);

test(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Main
              moviesList={state.DATA.moviesList}
              onPlayClick={noop}
              onMylistClick={noop}
              authorizationStatus={state.USER.authorizationStatus}
              changeMovieFavoriteStatusAction={noop}
              userInfo={state.USER.user}
              promo={state.DATA.promo}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
