import React from 'react';
import renderer from 'react-test-renderer';
import {movie} from '../../test-data';
import VideoPlayer from './video-player.jsx';

test(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          movie={movie}
          playerStatus={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
