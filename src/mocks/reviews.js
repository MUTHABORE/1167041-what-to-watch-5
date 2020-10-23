import {getRandomNumber, getRandomInteger, getRandomSet} from '../util/common.js';

const MAX_RATING = 10;
const MAX_DAYS_IN_MONTH = 31;
const MIN_REVIEW_YEAR = 1990;
const MAX_REVIEW_YEAR = 2020;
const REVIEWS_AMOUNT = 10;

const USER_NAMES = [`James Dirr`, `Reanu Keeves`, `Ceremy Glarkson`, `Helena Looper`, `Vagabond2009`, `pups007`];

const SOME_SENTENCES = [
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

const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export const generateReviews = () => {
  const reviews = [];

  for (let i = 0; i < getRandomInteger(0, REVIEWS_AMOUNT); i++) {
    reviews[i] = {
      userName: USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)],
      rating: getRandomNumber(MAX_RATING, 1),
      text: getRandomSet(SOME_SENTENCES).toString(),
      date: getRandomInteger(0, MONTHS - 1) + ` ` + getRandomInteger(0, MAX_DAYS_IN_MONTH) + `, ` + getRandomInteger(MIN_REVIEW_YEAR, MAX_REVIEW_YEAR)
    };
  }
  return reviews;
};

