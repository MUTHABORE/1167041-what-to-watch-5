import {moviesData} from './movies-data.js';
import {ActionType} from '../../action.js';
import {fetchMoviesList, fetchMovieReviews, fetchPromoMovie} from '../../api-actions.js';
import {extend} from '../../../util/utils.js';
import {state, noop} from '../../../test-data.js';
import {createAPI} from '../../../services/api.js';
import MockAdapter from 'axios-mock-adapter';
import {APIRoute} from '../../../util/const.js';

const api = createAPI(noop);

describe(`Should moviesData work correctly with store`, () => {
  it(`moviesData reducer without additional parameters should return initial state`, () => {
    expect(moviesData(state.DATA, {})).toEqual(state.DATA);
  });

  it(`Reducer should change moviesList and genresList`, () => {
    expect(moviesData(state.DATA, {
      type: ActionType.LOAD_MOVIES,
      payload: state.DATA.moviesList,
    })).toEqual(extend(state.DATA, {
      moviesList: state.DATA.moviesList,
      genresList: state.DATA.genresList,
    }));
  });

  it(`Reducer should change reviews`, () => {
    expect(moviesData(state.DATA, {
      type: ActionType.LOAD_REVIEWS,
      payload: state.DATA.reviews,
    })).toEqual(extend(state.DATA, {
      reviews: state.DATA.reviews,
    }));
  });

  it(`Reducer should load promo`, () => {
    expect(moviesData(state.DATA, {
      type: ActionType.LOAD_PROMO,
      payload: state.DATA.promo,
    })).toEqual(extend(state.DATA, {
      promo: state.DATA.promo,
    }));
  });
});

describe(`Should moviesData async work correctly`, () => {
  it(`Should make a correct API get request to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsListFetcher = fetchMoviesList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, {fake: true});

    return filmsListFetcher(dispatch, noop, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_MOVIES,
            payload: {fake: true},
          });
        });
  });

  it(`Should make a correct API get request to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetcherPromoMovie = fetchPromoMovie();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, {fake: true});

    return fetcherPromoMovie(dispatch, noop, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_PROMO,
            payload: {fake: true},
          });
        });
  });

  it(`Should make a correct API get request to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fetcherMovieReviews = fetchMovieReviews(fakeId);

    apiMock
      .onGet(`/comments/${fakeId}`)
      .reply(200, {fake: true});

    return fetcherMovieReviews(dispatch, noop, api)

    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: {fake: true},
      });
    });
  });
});
