import React, {PureComponent} from 'react';

class FormReview extends PureComponent {
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
      <form action="#" className="add-review__form" onSubmit={this._submitHandler}>
        <div className="rating">
          <div className="rating__stars">
            <input onChange={this._reviewChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input onChange={this._reviewChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input onChange={this._reviewChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input onChange={this._reviewChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input onChange={this._reviewChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange ={this._reviewChangeHandler} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormReview;
