import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {allMovies} from './mocks/films.js';

ReactDOM.render(<App films={allMovies}/>, document.querySelector(`#root`));
