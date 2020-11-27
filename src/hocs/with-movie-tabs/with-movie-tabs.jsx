import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {propsForFilms} from '../../util/props-validation.js';

import {fetchMovieReviews} from '../../store/api-actions.js';

import {TabsTypes} from '../../util/const.js';

export const withMovieTabs = (Component) => {
  class WithMovieTabs extends PureComponent {
    constructor(props) {
      super(props);
      this._movie = props.movie;

      this.state = {
        currentTab: TabsTypes.OVERVIEW
      };

      this.fetchMovieReviews = props.fetchMovieReviewsAction;
      this._tabsChangeHandler = this._tabsChangeHandler.bind(this);
    }

    componentDidMount() {
      this.fetchMovieReviews(this._movie.id);
    }

    componentDidUpdate() {
      if (this._movie.id !== this.props.movie.id) {
        this.setState({currentTab: TabsTypes.OVERVIEW});
        this._movie = this.props.movie;
        this.fetchMovieReviews(this._movie.id);
      }
    }

    _tabsChangeHandler(evt, type) {
      evt.preventDefault();
      if (this.state.currentTab === type) {
        return;
      }

      this.setState({currentTab: type});
    }

    render() {
      return (
        <Component
          {...this.props}
          movie={this._movie}
          currentTab={this.state.currentTab}
          tabsChangeHandler={this._tabsChangeHandler}
        />
      );
    }
  }

  WithMovieTabs.propTypes = {
    movie: propsForFilms,
    reviews: PropTypes.array.isRequired,
    fetchMovieReviewsAction: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviews: state.DATA.reviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchMovieReviewsAction(id) {
      dispatch(fetchMovieReviews(id));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithMovieTabs);
};
