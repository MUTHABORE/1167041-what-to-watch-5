import React from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation.js';

import {AMOUNT_MOVIES_TO_RENDER} from '../../util/const.js';

export const withMoviesList = (Component) => {
  class WithMoviesList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.moviesList = props.moviesList;

      this.changeAmountMoviesToRender = props.changeAmountMoviesToRender;
      this.amountMoviesToRender = props.amountMoviesToRender;


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
      this.changeAmountMoviesToRender(this.amountMoviesToRender + AMOUNT_MOVIES_TO_RENDER);
    }

    render() {
      this.moviesList = this.props.moviesList;
      this.amountMoviesToRender = this.props.amountMoviesToRender;
      return (
        <Component
          {...this.props}
          cardHoverHandler={this.cardHoverHandler}
          cardLeaveHoverHandler={this.cardLeaveHoverHandler}
          showMoreButtonClickHandler={this.showMoreButtonClickHandler}
        />
      );
    }
  }

  WithMoviesList.propTypes = {
    moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
    amountMoviesToRender: PropTypes.number.isRequired,
    changeAmountMoviesToRender: PropTypes.func.isRequired,
  };

  return WithMoviesList;
};
