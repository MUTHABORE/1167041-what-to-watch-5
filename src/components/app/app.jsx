import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';

const App = ({film}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main film={film}/>
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact>
          <Film />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired
};

export default App;
