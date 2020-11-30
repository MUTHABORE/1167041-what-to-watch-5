import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../test-data';
import ShowMoreButton from './show-more-button.jsx';

test(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          clickHandler={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
