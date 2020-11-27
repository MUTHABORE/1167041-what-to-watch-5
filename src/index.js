import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api.js';
import App from './components/app/app';
import rootReducer from './store/root-reducer.js';
import {requireAuthorization} from './store/action.js';
import {fetchMoviesList, checkAuth} from './store/api-actions.js';
import {AuthorizationStatus} from './util/const.js';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
