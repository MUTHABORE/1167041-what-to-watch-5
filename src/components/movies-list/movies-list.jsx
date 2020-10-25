import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation';

import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.films = props.films;

    this.state = {
      hoveredFilm: null
    };

    this.cardHoverHandler = this.cardHoverHandler.bind(this);
    this.cardLeaveHoverHandler = this.cardLeaveHoverHandler.bind(this);
  }

  cardHoverHandler(film) {
    this.setState = ({
      hoveredFilm: film
    });
  }

  cardLeaveHoverHandler() {
    this.setState = ({
      hoveredFilm: null
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.films.map((film) => (
          <MovieCard
            cardHoverHandler={this.cardHoverHandler}
            cardLeaveHoverHandler={this.cardLeaveHoverHandler}
            key={film.id}
            film={film}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired
};

export default MoviesList;
