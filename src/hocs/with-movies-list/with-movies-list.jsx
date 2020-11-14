import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation.js';
import {extend} from '../../util/utils.js';

import {AMOUNT_MOVIES_TO_RENDER} from '../../util/const.js';

export const withMoviesList = (Component) => {
  class WithMoviesList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.moviesList = props.moviesList;

      this.state = {
        hoveredMovie: null,
        amountMoviesToRender: AMOUNT_MOVIES_TO_RENDER,
      };

      this.cardHoverHandler = this.cardHoverHandler.bind(this);
      this.cardLeaveHoverHandler = this.cardLeaveHoverHandler.bind(this);
      this.showMoreButtonClickHandler = this.showMoreButtonClickHandler.bind(this);
    }

    cardHoverHandler(id) {
      this.setState({hoveredMovie: id});
    }

    cardLeaveHoverHandler() {
      this.setState({hoveredMovie: null});
    }

    showMoreButtonClickHandler() {
      this.setState(extend(this.state, {amountMoviesToRender: this.state.amountMoviesToRender + AMOUNT_MOVIES_TO_RENDER}));
    }

    render() {
      this.moviesList = this.props.moviesList;
      return (
        <Component
          {...this.props}
          moviesList={this.moviesList}
          amountMoviesToRender={this.state.amountMoviesToRender}
          cardHoverHandler={this.cardHoverHandler}
          cardLeaveHoverHandler={this.cardLeaveHoverHandler}
          showMoreButtonClickHandler={this.showMoreButtonClickHandler}
        />
      );
    }
  }

  WithMoviesList.propTypes = {
    moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  };

  return WithMoviesList;
};
