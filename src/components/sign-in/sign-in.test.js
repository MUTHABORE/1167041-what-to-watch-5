import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configurateMockState from 'redux-mock-store';
import {state, noop} from '../../test-data';
import {SignIn} from './sign-in.jsx';

const mockStore = configurateMockState()(state);

test(`Should SignIn render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <SignIn
              onSubmit={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
