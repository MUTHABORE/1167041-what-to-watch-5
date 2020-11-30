import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {noop, routerProps, movie, reviews} from '../../test-data';
import {MovieTabs} from './movie-tabs.jsx';
import {TabsTypes} from '../../util/const.js';

test(`Should MovieTabs render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieTabs
            movie={movie}
            routerProps={routerProps}
            currentTab={TabsTypes.OVERVIEW}
            tabsChangeHandler={noop}
            reviews={reviews}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
