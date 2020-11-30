import React from 'react';
import renderer from 'react-test-renderer';
import {noop, routerProps, movie} from '../../test-data';
import {Player} from './player.jsx';

test(`Should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player
          movie={movie}
          routerProps={routerProps}
          playerStatusChangeHandler={noop}
          closeButtonClickHandler={noop}
          fullscreenClickHandler={noop}
          durationProgress={30}
          durationLeft={100}
          isPlaying={true}>
          <React.Fragment />
        </Player>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
