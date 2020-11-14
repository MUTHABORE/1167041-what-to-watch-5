import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  const {clickHandler} = props;
  return (
    <button className="catalog__button" type="button" onClick={clickHandler}>Show more</button>
  );
};

ShowMoreButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ShowMoreButton;
