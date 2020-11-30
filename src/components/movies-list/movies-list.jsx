import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation.js';
import {withMoviesList} from '../../hocs/with-movies-list/with-movies-list.jsx';

import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {moviesList, amountMoviesToRender, cardHoverHandler, cardLeaveHoverHandler, showMoreButtonClickHandler} = props;
  return (
    <>
      <div className="catalog__movies-list">
        {moviesList.slice(0, amountMoviesToRender).map((movie) => (
          <MovieCard
            cardHoverHandler={cardHoverHandler}
            cardLeaveHoverHandler={cardLeaveHoverHandler}
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
      <div className="catalog__more">
        {amountMoviesToRender < moviesList.length ? <ShowMoreButton clickHandler={showMoreButtonClickHandler}/> : ``}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  amountMoviesToRender: PropTypes.number.isRequired,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired,
  showMoreButtonClickHandler: PropTypes.func.isRequired,
};

export {MoviesList};
export default withMoviesList(MoviesList);
