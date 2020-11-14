import React, {PureComponent} from 'react';
import {propsForFilms} from '../../util/props-validation.js';
import PropTypes from 'prop-types';

export const withMovieCard = (Component) => {
  class WithMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this._movie = props.movie;

      this.state = {
        playerStatus: false,
      };

      this.cardHoverHandler = props.cardHoverHandler;
      this.cardLeaveHoverHandler = props.cardLeaveHoverHandler;

      this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
      this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
    }

    _mouseEnterHandler() {
      this.cardHoverHandler(this._movie);
      this.setState({playerStatus: true});
    }

    _mouseLeaveHandler() {
      this.cardLeaveHoverHandler();
      this.setState({playerStatus: false});
    }

    render() {
      const playerStatus = this.state.playerStatus;
      return (
        <Component
          {...this.props}
          movie={this._movie}
          playerStatus={playerStatus}
          mouseEnterHandler={this._mouseEnterHandler}
          mouseLeaveHandler={this._mouseLeaveHandler}
        />
      );
    }
  }

  WithMovieCard.propTypes = {
    movie: propsForFilms,
    cardHoverHandler: PropTypes.func.isRequired,
    cardLeaveHoverHandler: PropTypes.func.isRequired,
  };

  return WithMovieCard;
};
