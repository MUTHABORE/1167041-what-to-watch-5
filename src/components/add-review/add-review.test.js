import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {state, routerProps} from '../../test-data';
import {AddReview} from './add-review.jsx';

const mockStore = configureMockStore()(state);

test(`Should Add-review render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <AddReview
              moviesList={state.DATA.moviesList}
              routerProps={routerProps}
              authorizationStatus={state.USER.authorizationStatus}
              userInfo={state.USER.user}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
