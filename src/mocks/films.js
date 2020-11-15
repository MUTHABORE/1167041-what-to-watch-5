import {getRandomInteger, getRandomSet, getRandomNumber} from '../util/common.js';
import {generateReviews} from './reviews.js';

const MIN_RELEASE_YEAR = 1990;
const MAX_RELEASE_YEAR = 2020;
const MAX_FILMS_AMOUNT = 17;
const MAX_RATING = 10;
const MAX_DURATION = 250;

const FILM_DIRECTORS = [
  `Stanley Kubrick`,
  `Hideaki Anno`,
  `Christopher Nolan`,
  `Denis Villeneuve`,
  `Nikita Storozhenko`,
  `Damien Chazelle`,
  `Shinichiro Watanabe`
];

const FILM_ACTORS = [
  `Matthew McConaughey`,
  `Bob Geldof`,
  `Ryan Gosling`,
  `Amy Adams`,
  `Miles Teller`
];

const GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`
];

const FILMS_NAMES = [
  `Neon Genesis Evangelion`,
  `2001: A Space Odyssey`,
  `Arrival`,
  `Pink Floyd The Wall`,
  `Interstellar`,
  `Cowboy Bebop`,
  `Blade Runner 2049`,
  `Whiplash`
];

const IMAGES_NAMES = [
  `2001-a-space-oddysey.jpg`,
  `arrival.jpg`,
  `interstellar.jpg`,
  `neon-genesis-evangelion.jpg`,
  `the-wall.jpg`,
  `cowboy-bebop.jpg`,
  `blade-runner-2049.png`,
  `whiplash.jpg`
];

const POSTERS_NAMES = [
  `2001-a-space-oddysey.jpg`,
  `arrival.jpg`,
  `interstellar.png`,
  `neon-genesis-evangelion.jpg`,
  `the-wall.jpg`,
  `cowboy-bebop.png`,
  `blade-runner-2049.jpg`,
  `whiplash.jpg`
];

const BACKGROUNDS = [
  `2001-a-space-odyssey.jpg`,
  `arrival.png`,
  `interstellar.jpg`,
  `neon-genesis-evangelion.jpg`,
  `the-wall.jpg`,
  `cowboy-bebop.jpg`,
  `blade-runner-2049.jpg`,
  `whiplash.jpg`
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  `Cras aliquet varius magna, non porta ligula feugiat eget`,
  `Fusce tristique felis at fermentum pharetra`,
  `Aliquam id orci ut lectus varius viverra`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui`,
  `Sed sed nisi sed augue convallis suscipit in sed felis`,
  `Aliquam erat volutpat`,
  `Nunc fermentum tortor ac porta dapibus`,
  `In rutrum ac purus sit amet tempus`,
];

const generateFilmsDatabase = () => {
  const films = [];

  for (let i = 0; i < MAX_FILMS_AMOUNT; i++) {
    films[i] = {
      id: String(i),
      title: FILMS_NAMES[getRandomInteger(0, FILMS_NAMES.length - 1)],
      image: IMAGES_NAMES[getRandomInteger(0, IMAGES_NAMES.length - 1)],
      poster: POSTERS_NAMES[getRandomInteger(0, POSTERS_NAMES.length - 1)],
      background: BACKGROUNDS[getRandomInteger(0, BACKGROUNDS.length - 1)],
      genre: GENRES[getRandomInteger(0, GENRES.length - 1)],
      description: getRandomSet(DESCRIPTION, 1),
      rating: getRandomNumber(MAX_RATING),
      amountVotes: getRandomInteger(0, 999),
      director: FILM_DIRECTORS[getRandomInteger(0, FILM_DIRECTORS.length - 1)],
      actors: getRandomSet(FILM_ACTORS, 1),
      duration: getRandomInteger(0, MAX_DURATION),
      releaseDate: getRandomInteger(MIN_RELEASE_YEAR, MAX_RELEASE_YEAR),
      video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      reviews: generateReviews()
    };
  }
  return films;
};

export const allMovies = generateFilmsDatabase();

