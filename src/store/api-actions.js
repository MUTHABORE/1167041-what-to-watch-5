import swal from 'sweetalert';
import {adaptMovieToClient} from '../util/film.js';
import {adaptUserToClient} from '../util/user.js';
import {loadMovies, loadReviews, requireAuthorization, redirectToRoute, loadUser, loadPromo} from './action.js';
import {AuthorizationStatus, AppRoute, APIRoute} from '../util/const.js';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}`)
    .then(({data}) => {
      const movies = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadMovies(movies));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.PROMO}`)
  .then(({data}) => dispatch(loadPromo(adaptMovieToClient(data))))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.SIGN_IN}`)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUser(adaptUserToClient(data)));
    })
    .catch(() => {})
);

export const login = ({email: email, password}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.SIGN_IN}`, {email, password})
    .then(({data}) => {
      dispatch(loadUser(adaptUserToClient(data)));
      dispatch(fetchMoviesList());
    })
    .then(() => {
      dispatch(redirectToRoute(`${AppRoute.ROOT}`));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => swal(`Error`, `Something went wrong!`, `error`))
);

export const postReview = ({comment, rating}, movieId, openReviewEditing) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}${movieId}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}${movieId}`)))
    .catch(() => {
      swal(`Something went wrong :(`, `Please check your internet connection or try submitting your review later...`);
      openReviewEditing();
    })
);

export const changeMovieFavoriteStatus = (status, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}${movieId}/${status}`)
    .then(() => {
      dispatch(fetchMoviesList());
      dispatch(fetchPromoMovie());
    })
);
