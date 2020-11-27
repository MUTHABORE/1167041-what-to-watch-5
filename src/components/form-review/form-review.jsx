import React from 'react';
import PropTypes from 'prop-types';
import {withFormReview} from '../../hocs/with-form-review/with-form-review.jsx';

export const FormReview = (props) => {
  const {submitHandler, reviewChangeHandler, isSubmitAvailable} = props;
  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">
          <input onChange={reviewChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input onChange={reviewChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={reviewChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={reviewChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={reviewChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={reviewChangeHandler} className="add-review__textarea" name="text" id="review-text" placeholder="Review text" minLength="50" maxLength="400"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitAvailable === true ? `` : `disabled`}>Post</button>
        </div>
      </div>
    </form>
  );
};

FormReview.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  reviewChangeHandler: PropTypes.func.isRequired,
  isSubmitAvailable: PropTypes.bool.isRequired,
};

export default withFormReview(FormReview);
