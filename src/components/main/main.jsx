import React from 'react';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../util/props-validation.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeMovieFavoriteStatus} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../util/const.js';
import GenresList from '../genres-list/genres-list';

const Main = (props) => {
  const authorizationStatus = props.authorizationStatus;
  const onMylistClick = props.changeMovieFavoriteStatusAction;
  const onPlayClick = props.onPlayClick;
  const films = props.moviesList;
  const film = films[0];
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.NO_AUTH && (
              <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
            )}
            {authorizationStatus === AuthorizationStatus.AUTH && (
              <div className="user-block__avatar">
                <Link to={AppRoute.MY_LIST}>
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            )}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={film.poster_image} alt={film.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(`${film.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={() => onMylistClick(`${film.is_favorite === true ? 0 : 1}`, `${film.id}`)}>
                  {film.is_favorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMylistClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeMovieFavoriteStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  moviesList: DATA.moviesList,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeMovieFavoriteStatusAction(status, movieId) {
    dispatch(changeMovieFavoriteStatus(status, movieId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
