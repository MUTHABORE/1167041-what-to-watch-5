import {loadMovies, loadReviews, requireAuthorization, redirectToRoute} from './action.js';
import {AuthorizationStatus, AppRoute, APIRoute} from '../util/const.js';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}`)
    .then(({data}) => {
      dispatch(loadMovies(data));
    })
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.SIGN_IN}`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email: email, password}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.SIGN_IN}`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`${AppRoute.ROOT}`)))
    .catch(() => alert(`No such account exists. Wrong login or password.`))
);

export const postReview = ({comment, rating}, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}${movieId}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}${movieId}`)))
    .catch(() => alert(`Something went wrong :( Please check your internet connection or try submitting your review again later..`))
);

export const changeMovieFavoriteStatus = (status, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${movieId}/${status}`)
    .then(() => dispatch(fetchMoviesList()))
);