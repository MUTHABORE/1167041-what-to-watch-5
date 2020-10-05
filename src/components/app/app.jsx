import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <MainPage film={props.film}/>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired
};

export default App;
