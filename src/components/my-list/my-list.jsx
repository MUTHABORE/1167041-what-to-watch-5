import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation.js';

import {changeAmountMoviesToRender} from '../../store/action.js';
import MoviesList from '../movies-list/movies-list.jsx';

const MyList = (props) => {
  const {moviesList, amountMoviesToRender, changeAmountMoviesToRenderAction} = props;
  const favoritesMovies = moviesList.filter((movie) => movie.is_favorite === true);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList moviesList={favoritesMovies} amountMoviesToRender={amountMoviesToRender} changeAmountMoviesToRender={changeAmountMoviesToRenderAction} />

      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms),
  amountMoviesToRender: PropTypes.number.isRequired,
  changeAmountMoviesToRenderAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FUNCTIONAL}) => ({
  moviesList: DATA.moviesList,
  amountMoviesToRender: FUNCTIONAL.amountMoviesToRender,
});

const mapDispatchToProps = (dispatch) => ({
  changeAmountMoviesToRenderAction(amount) {
    dispatch(changeAmountMoviesToRender(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
