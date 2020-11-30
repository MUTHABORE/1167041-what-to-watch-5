import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {noop, movie} from '../../test-data';
import {MovieCard} from './movie-card.jsx';

test(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCard
            movie={movie}
            playerStatus={false}
            mouseEnterHandler={noop}
            mouseLeaveHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
