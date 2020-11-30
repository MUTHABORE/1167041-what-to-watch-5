import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockState from 'redux-mock-store';
import {state} from '../../test-data';
import {App} from './app.jsx';

const mockStore = configureMockState()(state);

test(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <App authorizationStatus={state.USER.authorizationStatus} />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
