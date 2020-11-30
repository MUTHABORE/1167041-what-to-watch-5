import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {state, noop} from '../../test-data';
import {PrivateRoute} from './private-route.jsx';

test(`Should PrivateRoute render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            authorizationStatus={state.USER.authorizationStatus}
            render={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
