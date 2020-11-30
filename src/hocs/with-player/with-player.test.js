import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configurateMockState from 'redux-mock-store';
import {MockComponent, state, routerProps, noop} from '../../test-data';
import {withPlayer} from './with-player.jsx';

const MockComponentWrapped = withPlayer(MockComponent);

const mockStore = configurateMockState()(state);

test(`Should withPlayer render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={mockStore}>
        <MockComponentWrapped
          moviesList={state.DATA.moviesList}
          routerProps={routerProps}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
    ), {
      createNodeMock() {
        return {
          play: noop,
          pause: noop,
        };
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
