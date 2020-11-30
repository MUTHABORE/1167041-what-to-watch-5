import swal from 'sweetalert';
import {loadMovies, loadReviews, requireAuthorization, redirectToRoute, loadUser, loadPromo} from './action.js';
import {AuthorizationStatus, AppRoute, APIRoute} from '../util/const.js';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}`)
    .then(({data}) => {
      dispatch(loadMovies(data));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.PROMO}`)
  .then(({data}) => dispatch(loadPromo(data)))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.SIGN_IN}`)
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUser(data.data));
    })
    .catch(() => {})
);

export const login = ({email: email, password}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.SIGN_IN}`, {email, password})
    .then(({data}) => {
      dispatch(loadUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => {
      dispatch(fetchMoviesList());
      dispatch(redirectToRoute(`${AppRoute.ROOT}`));
    })
    .catch(() => swal(`No such account exists. Wrong login or password. Please make sure the entered data is correct.`))
);

export const postReview = ({comment, rating}, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}${movieId}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}${movieId}`)))
    .catch(() => swal(`Something went wrong :( Please check your internet connection or try submitting your review later...`))
);

export const changeMovieFavoriteStatus = (status, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${movieId}/${status}`)
    .then(() => {
      dispatch(fetchMoviesList());
      dispatch(fetchPromoMovie());
    })
);
