import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from '../../browser-history.js';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';
import {AppRoute, AuthorizationStatus} from '../../util/const.js';

const App = (props) => {
  const authorizationStatus = props.authorizationStatus;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={(routerProps) => (
            <Main
              routerProps={routerProps}
              onMylistClick={() => routerProps.history.push(`${AppRoute.MY_LIST}`)}
              onPlayClick={(id) => routerProps.history.push(`/player/${id}`)}
            />
          )}
        />
        <Route exact path={AppRoute.SIGN_IN}
          render={(routerProps) => (
            authorizationStatus === AuthorizationStatus.NO_AUTH ?
              <SignIn/>
              :
              routerProps.history.push(`${AppRoute.ROOT}`)
          )}
        />
        <PrivateRoute exact path={AppRoute.MY_LIST}
          render={() => (
            <MyList/>
          )}
        />
        <Route exact path={AppRoute.FILM}
          render={(routerProps) => (
            <Film
              routerProps={routerProps}
              onMylistClick={() => routerProps.history.push(`${AppRoute.MY_LIST}`)}
              onPlayClick={(id) => routerProps.history.push(`/player/${id}`)}
            />
          )}
        />
        <PrivateRoute exact path={AppRoute.FILM_REVIEW}
          render={(routerProps) => (
            <AddReview routerProps={routerProps}/>
          )}
        />
        <Route exact path={AppRoute.FILM_PLAYER}
          render={(routerProps) => (
            <Player routerProps={routerProps} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(App);
