import React from 'react';
import renderer from 'react-test-renderer';
import {MockComponent, movie, noop} from '../../test-data';
import {withMovieCard} from './with-movie-card.jsx';

const MockComponentWrapped = withMovieCard(MockComponent);

test(`Should withMovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          movie={movie}
          cardHoverHandler={noop}
          cardLeaveHoverHandler={noop}
        >
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
