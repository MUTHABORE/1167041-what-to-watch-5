import React from 'react';
import PropTypes from 'prop-types';

export const noop = () => {};

export const routerProps = {
  match: {
    params: {
      id: `1`,
    }
  }
};

export const movies = [
  {
    name: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    rating: 3.6,
    votes: 109661,
    director: `Nicolas Winding Refn`,
    starring: [
      `Tom Hardy`,
      `Kelly Adams`,
      `Luing Andrews`
    ],
    runtime: 92,
    genre: `Action`,
    released: 2008,
    id: 1,
    isFavorite: false,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    name: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    rating: 3.6,
    votes: 109661,
    director: `Nicolas Winding Refn`,
    starring: [
      `Tom Hardy`,
      `Kelly Adams`,
      `Luing Andrews`
    ],
    runtime: 92,
    genre: `Action`,
    released: 2008,
    id: 2,
    isFavorite: true,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

export const reviews = [
  {
    id: 1,
    user: {
      id: 11,
      name: `Jack`
    },
    rating: 8.6,
    comment: `A movie that will take you to another world full of emotions.`,
    date: `2020-11-03T13:38:44.769Z`
  },
  {
    id: 2,
    user: {
      id: 12,
      name: `Jack`
    },
    rating: 8.6,
    comment: `A movie that will take you to another world full of emotions.`,
    date: `2020-11-03T13:38:44.769Z`
  }
];

export const movie = movies[0];

export const userMock = {
  id: 1,
  name: `GERASIM`,
  email: `moo@moo.com`,
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
};

export const state = {
  DATA: {
    moviesList: [movies[0], movies[1]],
    genresList: [`All genres`, `Action`],
    reviews: [],
    promo: movies[0],
  },
  FUNCTIONAL: {
    activeGenre: `All genres`,
    amountMoviesToRender: 8,
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    user: userMock,
  },
};

export const MockComponent = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export const SimpleMockComponent = () => <div />;
