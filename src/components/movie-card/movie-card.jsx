import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propsForFilms} from '../../util/props-validation';

import VideoPlayer from '../video-player/video-player.jsx';
class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._film = props.film;

    this.state = {
      playerStatus: false
    };

    this.cardHoverHandler = props.cardHoverHandler;
    this.cardLeaveHoverHandler = props.cardLeaveHoverHandler;

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
  }

  _mouseEnterHandler() {
    this.cardHoverHandler(this.film);
    this.setState({playerStatus: true});
  }

  _mouseLeaveHandler() {
    this.cardLeaveHoverHandler();
    this.setState({playerStatus: false});
  }

  render() {
    const playerStatus = this.state.playerStatus;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouseLeaveHandler}>
        <div className="small-movie-card__image">
          <VideoPlayer film={this._film} playerStatus={playerStatus} />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${this._film.id}`}>{this._film.title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: propsForFilms,
  cardHoverHandler: PropTypes.func.isRequired,
  cardLeaveHoverHandler: PropTypes.func.isRequired
};

export default MovieCard;
