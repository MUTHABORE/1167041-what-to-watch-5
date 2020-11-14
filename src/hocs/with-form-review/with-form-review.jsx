import React, {PureComponent} from 'react';

export const withFormReview = (Component) => {
  class WithFormReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: null,
        rating: null
      };

      this._submitHandler = this._submitHandler.bind(this);
      this._reviewChangeHandler = this._reviewChangeHandler.bind(this);
    }

    _submitHandler(evt) {
      evt.preventDefault();
    }

    _reviewChangeHandler(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          submitHandler={this._submitHandler}
          reviewChangeHandler={this._reviewChangeHandler}
        />
      );
    }
  }

  return WithFormReview;
};
