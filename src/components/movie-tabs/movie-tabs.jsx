import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {propsForFilms, propsForRouterProps} from '../../util/props-validation.js';
import {Link} from 'react-router-dom';
import {getRatingFrase} from '../../util/film.js';
import {TabsTypes} from '../../util/const.js';

import {withMovieTabs} from '../../hocs/with-movie-tabs/with-movie-tabs.jsx';

const MovieTabs = (props) => {
  const {movie, currentTab, tabsChangeHandler, reviews} = props;
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={currentTab === TabsTypes.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to="#" className="movie-nav__link" onClick={(evt) => {
              tabsChangeHandler(evt, TabsTypes.OVERVIEW);
            }}>Overview</Link>
          </li>
          <li className={currentTab === TabsTypes.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to="#" className="movie-nav__link" onClick={(evt) => {
              tabsChangeHandler(evt, TabsTypes.DETAILS);
            }}>Details</Link>
          </li>
          <li className={currentTab === TabsTypes.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to="#" className="movie-nav__link" onClick={(evt) => {
              tabsChangeHandler(evt, TabsTypes.REVIEWS);
            }}>Reviews</Link>
          </li>
        </ul>
      </nav>

      {currentTab === TabsTypes.OVERVIEW && (
        <>
          <div className="movie-rating">
            <div className="movie-rating__score">{movie.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{getRatingFrase(movie.rating)}</span>
              <span className="movie-rating__count">{`${movie.votes} ratings`}</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{movie.description}</p>

            <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
          </div>
        </>
      )}
      {currentTab === TabsTypes.DETAILS && (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{movie.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {movie.starring.map((elem, i) => (
                  <React.Fragment key={i}>
                    {elem}
                    {movie.starring.length > (i + 1) ? `,` : ``}
                    {<br/>}
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{(movie.runtime / 60 | 0) + `h ` + (movie.runtime % 60) + `m`}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movie.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movie.released}</span>
            </p>
          </div>
        </div>
      )}
      {currentTab === TabsTypes.REVIEWS && (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((elem, i) => (
              <div className="review" key={i}>
                <blockquote className="review__quote">
                  <p className="review__text">{elem.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{elem.user.name}</cite>
                    <time className="review__date" dateTime={moment(elem.date).format(`YYYY-dd-M`)}>{moment(elem.date).format(`MMMM D, YYYY`)}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{elem.rating}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

MovieTabs.propTypes = {
  movie: propsForFilms,
  routerProps: propsForRouterProps,
  currentTab: PropTypes.string.isRequired,
  tabsChangeHandler: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

export {MovieTabs};
export default withMovieTabs(MovieTabs);
