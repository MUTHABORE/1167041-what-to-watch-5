import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {propsForFilms} from '../../util/props-validation.js';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';

const App = (props) => {
  const films = props.films;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={films}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id"
          render={(routerProps) => (
            <Film films={films} routerProps={routerProps}/>
          )}
        >
        </Route>
        <Route exact path="/films/:id/review"
          render={(routerProps) => (
            <AddReview films={films} routerProps={routerProps}/>
          )}
        >
        </Route>
        <Route exact path="/player/:id"
          render={(routerProps) => (
            <Player films={films} routerProps={routerProps}/>
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired
};

export default App;
