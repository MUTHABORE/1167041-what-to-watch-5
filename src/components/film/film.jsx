import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../util/const.js';
import {Link} from 'react-router-dom';

import {changeAmountMoviesToRender} from '../../store/action.js';
import {changeMovieFavoriteStatus} from '../../store/api-actions.js';
import MovieTabs from '../movie-tabs/movie-tabs.jsx';
import {propsForFilms, propsForRouterProps, propsForUser} from '../../util/props-validation.js';
import MoviesList from '../movies-list/movies-list.jsx';
import {AMOUNT_SIMILAR_MOVIES_TO_RENDER} from '../../util/const.js';

const Film = (props) => {
  const {onPlayClick, changeAmountMoviesToRenderAction, moviesList, changeMovieFavoriteStatusAction} = props;
  const movieId = props.routerProps.match.params.id;
  const currentMovie = moviesList.find((elem) => elem.id.toString() === movieId);
  const onMylistClick = changeMovieFavoriteStatusAction;
  const onMylistClickNoAuth = props.onMylistClick;

  const authorizationStatus = props.authorizationStatus;

  const similarMovies = moviesList.filter((elem) => (elem.genre === currentMovie.genre) && (elem.id !== currentMovie.id));
  const similarMoviesToRender = similarMovies.slice(0, AMOUNT_SIMILAR_MOVIES_TO_RENDER);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentMovie.background_image} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.NO_AUTH && (
                <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
              )}
              {authorizationStatus === AuthorizationStatus.AUTH && (
                <div className="user-block__avatar">
                  <Link to={AppRoute.MY_LIST}>
                    <img src={props.userInfo.avatar_url} alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
              )}
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentMovie.genre}</span>
                <span className="movie-card__year">{currentMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(`${movieId}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <button className="btn btn--list movie-card__button" type="button" onClick={() => onMylistClick(+!currentMovie.is_favorite, currentMovie.id)}>
                    {currentMovie.is_favorite ?
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
                  :
                  <button className="btn btn--list movie-card__button" type="button" onClick={() => onMylistClickNoAuth()}>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                }
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <Link to={`/films/${movieId}/review`} className="btn movie-card__button">Add review</Link>
                  :
                  ``
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentMovie.poster_image} alt={currentMovie.name} width="218" height="327" />
            </div>

            <MovieTabs movie={currentMovie}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        {similarMoviesToRender.length === 0 ? `` : <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList moviesList={similarMoviesToRender} amountMoviesToRender={AMOUNT_SIMILAR_MOVIES_TO_RENDER} changeAmountMoviesToRender={changeAmountMoviesToRenderAction} />
        </section>}

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
    </React.Fragment>
  );
};

Film.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms),
  routerProps: propsForRouterProps,
  changeAmountMoviesToRenderAction: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeMovieFavoriteStatusAction: PropTypes.func.isRequired,
  userInfo: propsForUser,
  onMylistClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  moviesList: DATA.moviesList,
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeAmountMoviesToRenderAction(amount) {
    dispatch(changeAmountMoviesToRender(amount));
  },
  changeMovieFavoriteStatusAction(status, movieId) {
    dispatch(changeMovieFavoriteStatus(status, movieId));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
