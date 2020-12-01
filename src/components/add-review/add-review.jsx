import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../util/const.js';

import {propsForFilms, propsForRouterProps} from '../../util/props-validation.js';

import FormReview from '../form-review/form-review.jsx';

const AddReview = (props) => {
  const userAvatar = props.userInfo.avatarUrl;
  const authorizationStatus = props.authorizationStatus;
  const movies = props.moviesList;
  const movieId = props.routerProps.match.params.id;
  const currentMovie = movies.find((elem) => elem.id.toString() === movieId);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={currentMovie.background} alt={currentMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movieId}`} className="breadcrumbs__link">{currentMovie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.NO_AUTH && (
              <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
            )}
            {authorizationStatus === AuthorizationStatus.AUTH && (
              <div className="user-block__avatar">
                <Link to={AppRoute.MY_LIST}>
                  <img src={userAvatar} alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            )}
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={currentMovie.poster} alt={currentMovie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormReview movieId={movieId} />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  routerProps: propsForRouterProps,
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  moviesList: DATA.moviesList,
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.user,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
