import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../test-data';
import {FormReview} from './form-review.jsx';

test(`Should FormReview render correctly`, () => {
  const tree = renderer
    .create(
        <FormReview
          submitHandler={noop}
          reviewChangeHandler={noop}
          isSubmitAvailable={false}
          isReviewEditingAvailable={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
