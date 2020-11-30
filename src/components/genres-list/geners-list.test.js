import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {state, noop} from '../../test-data';
import {GenresList} from './genres-list.jsx';

test(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <GenresList
            activeGenre={state.FUNCTIONAL.activeGenre}
            moviesList={state.DATA.moviesList}
            genresList={state.DATA.genresList}
            amountMoviesToRender={state.FUNCTIONAL.amountMoviesToRender}
            changeActiveGenreAction={noop}
            changeAmountMoviesToRenderAction={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
