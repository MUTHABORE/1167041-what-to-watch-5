import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../util/props-validation';

const MovieCard = (props) => {
  const {id, image, title} = props.film;
  const cardHoverHandler = props.cardHoverHandler;
  const cardLeaveHoverHandler = props.cardLeaveHoverHandler;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => cardHoverHandler(props.film)}
      onMouseLeave={cardLeaveHoverHandler}>
      <div className="small-movie-card__image">
        <img src={`img/images/${image}`} alt={`${title}`} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: propsForFilms,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired
};

export default MovieCard;
