import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../util/props-validation';

import VideoPlayer from '../video-player/video-player.jsx';
import {withMovieCard} from '../../hocs/with-movie-card/with-movie-card.jsx';

const MovieCard = (props) => {
  const {movie, playerStatus, mouseEnterHandler, mouseLeaveHandler} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
      <Link className="small-movie-card__link" to={`/films/${movie.id}`}>
        <div className="small-movie-card__image">
          <VideoPlayer movie={movie} playerStatus={playerStatus} />
        </div>
        <h3 className="small-movie-card__title">
          <span>{movie.name}</span>
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propsForFilms,
  playerStatus: PropTypes.bool.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired
};

export {MovieCard};
export default withMovieCard(MovieCard);
