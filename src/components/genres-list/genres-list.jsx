import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';
import {genresList} from '../../store/reducer.js';
import {propsForFilms} from '../../util/props-validation.js';
import PropTypes from 'prop-types';

import MoviesList from '../movies-list/movies-list.jsx';

const GenresList = (props) => {
  const {activeGenre, moviesList, changeActiveGenre, changeMoviesList} = props;
  return (
    <>
      <ul className="catalog__genres-list">
        {genresList.map((genre, i) => (
          <li key={i} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} onClick={(evt) => {
            evt.preventDefault();
            changeActiveGenre(genre);
            changeMoviesList(genre);
          }
          }>
            <Link to="#" className="catalog__genres-link">{genre}</Link>
          </li>
        ))}
      </ul>
      <MoviesList moviesList={moviesList}/>
    </>
  );
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  changeMoviesList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  moviesList: state.moviesList,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
  },
  changeMoviesList(genre) {
    dispatch(ActionCreator.changeMoviesList(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
