import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configurateMockState from 'redux-mock-store';
import thunk from 'redux-thunk';
import {MockComponent, noop, state, movie, reviews} from '../../test-data';
import {createAPI} from '../../services/api';
import {withMovieTabs} from './with-movie-tabs.jsx';

const api = createAPI(noop);
const mockStore = configurateMockState([thunk.withExtraArgument(api)])(state);

const MockComponentWrapped = withMovieTabs(MockComponent);

test(`Should withMovieTabs render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MockComponentWrapped
            movie={movie}
            reviews={reviews}
            fetchMovieReviewsAction={noop}
          >
            <React.Fragment />
          </MockComponentWrapped>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
