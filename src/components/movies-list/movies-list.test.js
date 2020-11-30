import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {state, noop} from '../../test-data';
import {MoviesList} from './movies-list.jsx';

test(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviesList
            moviesList={state.DATA.moviesList}
            amountMoviesToRender={state.FUNCTIONAL.amountMoviesToRender}
            cardHoverHandler={noop}
            cardLeaveHoverHandler={noop}
            showMoreButtonClickHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
