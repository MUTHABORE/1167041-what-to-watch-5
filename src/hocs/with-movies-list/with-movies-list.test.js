import React from 'react';
import renderer from 'react-test-renderer';
import {MockComponent, noop, state} from '../../test-data';
import {withMoviesList} from './with-movies-list.jsx';

const MockComponentWrapped = withMoviesList(MockComponent);

test(`Should withMoviesList render correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          moviesList={state.DATA.moviesList}
          amountMoviesToRender={state.FUNCTIONAL.amountMoviesToRender}
          changeAmountMoviesToRender={noop}
        >
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
