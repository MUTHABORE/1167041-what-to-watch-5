export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  GET_MOVIES_LIST_BY_GENRE: `GET_MOVIES_LIST_BY_GENRE`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),

  changeMoviesList: (genre) => ({
    type: ActionType.GET_MOVIES_LIST_BY_GENRE,
    payload: genre,
  }),
};
