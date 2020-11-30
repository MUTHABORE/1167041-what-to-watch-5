export const CARD_SIZE = {
  width: 280,
  height: 175
};

export const HOVER_TIMEOUT = 1000;

export const MAX_AMOUNT_GENRES = 10;

export const TabsTypes = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AMOUNT_MOVIES_TO_RENDER = 8;
export const AMOUNT_SIMILAR_MOVIES_TO_RENDER = 4;

export const AppRoute = {
  ROOT: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  FILM_REVIEW: `/films/:id/review`,
  FILM_PLAYER: `/player/:id`,
};

export const APIRoute = {
  SIGN_IN: `/login`,
  FILMS: `/films/`,
  REVIEWS: `/comments/`,
  FAVORITE: `/favorite/`,
  PROMO: `/films/promo`,
};
