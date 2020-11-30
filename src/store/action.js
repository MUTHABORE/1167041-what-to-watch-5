export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_MOVIES_LIST_BY_GENRE: `GET_MOVIES_LIST_BY_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  POST_REVIEW: `POST_REVIEW`,
  LOAD_USER: `LOAD_USER`,
  LOAD_PROMO: `LOAD_PROMO`,
};

export const loadMovies = (moviesList) => ({
  type: ActionType.LOAD_MOVIES,
  payload: moviesList,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: genre,
});

export const changeAmountMoviesToRender = (amount) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  payload: amount,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadUser = (data) => ({
  type: ActionType.LOAD_USER,
  payload: data,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});
