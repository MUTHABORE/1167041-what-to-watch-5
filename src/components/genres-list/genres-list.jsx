import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeActiveGenre, changeAmountMoviesToRender} from '../../store/action.js';
import {getFilteredMovies} from '../../store/selectors.js';
import {propsForFilms} from '../../util/props-validation.js';
import PropTypes from 'prop-types';

import MoviesList from '../movies-list/movies-list.jsx';
import {AMOUNT_MOVIES_TO_RENDER} from '../../util/const.js';

const GenresList = (props) => {
  const {activeGenre, moviesList, genresList, amountMoviesToRender, changeActiveGenreAction, changeAmountMoviesToRenderAction} = props;
  return (
    <>
      <ul className="catalog__genres-list">
        {genresList.map((genre, i) => (
          <li key={i} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} onClick={(evt) => {
            evt.preventDefault();
            changeActiveGenreAction(genre);
            changeAmountMoviesToRenderAction(AMOUNT_MOVIES_TO_RENDER);
          }
          }>
            <Link to="#" className="catalog__genres-link">{genre}</Link>
          </li>
        ))}
      </ul>
      <MoviesList moviesList={moviesList} amountMoviesToRender={amountMoviesToRender} changeAmountMoviesToRender={changeAmountMoviesToRenderAction} />
    </>
  );
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
  genresList: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  amountMoviesToRender: PropTypes.number.isRequired,
  changeActiveGenreAction: PropTypes.func.isRequired,
  changeAmountMoviesToRenderAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, FUNCTIONAL}) => ({
  activeGenre: FUNCTIONAL.activeGenre,
  moviesList: getFilteredMovies({genresList: FUNCTIONAL.activeGenre, moviesList: DATA.moviesList}),
  genresList: DATA.genresList,
  amountMoviesToRender: FUNCTIONAL.amountMoviesToRender,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenreAction(genre) {
    dispatch(changeActiveGenre(genre));
  },
  changeAmountMoviesToRenderAction(amount) {
    dispatch(changeAmountMoviesToRender(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
