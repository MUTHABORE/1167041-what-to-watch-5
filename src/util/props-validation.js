import PropTypes from 'prop-types';

export const propsForFilms = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  released: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

export const propsForUser = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
});

export const propsForComments = PropTypes.shape({
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export const propsForRouterProps = PropTypes.shape({
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
});
