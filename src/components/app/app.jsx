import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
import Player from '../player/player.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList/>
        </Route>
        <Route exact path="/films/:id"
          render={(routerProps) => (
            <Film routerProps={routerProps}/>
          )}
        >
        </Route>
        <Route exact path="/films/:id/review"
          render={(routerProps) => (
            <AddReview routerProps={routerProps}/>
          )}
        >
        </Route>
        <Route exact path="/player/:id"
          render={(routerProps) => (
            <Player routerProps={routerProps}/>
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
