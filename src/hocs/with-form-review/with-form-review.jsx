import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {postReview} from '../../store/api-actions.js';

export const withFormReview = (Component) => {
  class WithFormReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        rating: null,
        isSubmitAvailable: false,
      };

      this._submitHandler = this._submitHandler.bind(this);
      this._reviewChangeHandler = this._reviewChangeHandler.bind(this);
    }

    componentDidUpdate() {
      if (this.state.text.length >= 50 && this.state.rating !== null) {
        this.setState({isSubmitAvailable: true});
      } else {
        this.setState({isSubmitAvailable: false});
      }
    }

    _submitHandler(evt) {
      evt.preventDefault();

      this.setState({isSubmitAvailable: false});
      this.props.postReviewAction({comment: this.state.text, rating: this.state.rating}, this.props.movieId);
    }

    _reviewChangeHandler(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          isSubmitAvailable={this.state.isSubmitAvailable}
          submitHandler={this._submitHandler}
          reviewChangeHandler={this._reviewChangeHandler}
        />
      );
    }
  }

  WithFormReview.propTypes = {
    movieId: PropTypes.string.isRequired,
    postReviewAction: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    postReviewAction({comment, rating}, id) {
      dispatch(postReview({comment, rating}, id));
    }
  });

  return connect(null, mapDispatchToProps)(WithFormReview);
};
