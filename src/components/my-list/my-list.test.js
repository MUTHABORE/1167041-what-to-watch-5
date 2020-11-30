import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configurateMockState from 'redux-mock-store';
import {state, noop} from '../../test-data';
import {MyList} from './my-list.jsx';

const mockStore = configurateMockState()(state);

test(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <MyList
              moviesList={state.DATA.moviesList}
              amountMoviesToRender={state.FUNCTIONAL.amountMoviesToRender}
              changeAmountMoviesToRenderAction={noop}
              userInfo={state.USER.user}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
