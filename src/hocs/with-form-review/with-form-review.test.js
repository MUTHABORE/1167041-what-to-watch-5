import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configurateMockState from 'redux-mock-store';
import thunk from 'redux-thunk';
import {MockComponent, noop, state, routerProps} from '../../test-data';
import {createAPI} from '../../services/api';
import {withFormReview} from './with-form-review.jsx';

const api = createAPI(noop);
const mockStore = configurateMockState([thunk.withExtraArgument(api)])(state);

const MockComponentWrapped = withFormReview(MockComponent);

test(`Should withFormReview render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MockComponentWrapped
            movieId={routerProps.match.params.id}
            postReviewAction={noop}
          >
            <React.Fragment />
          </MockComponentWrapped>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
