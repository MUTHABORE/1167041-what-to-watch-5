export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomSet = (arr, min = 0, max = arr.length) => {
  const newSet = [];

  for (let i = 0; i < getRandomInteger(min, max); i++) {
    newSet[i] = arr[getRandomInteger(0, arr.length - 1)];
  }

  return newSet;
};

export const getRandomNumber = (number, digits = 1) => {
  return (Math.random() * number).toFixed(digits);
};

export const formatDurationLeft = (durationLeft) => {
  const addZeroForTime = (time) => {
    return time < 10 ? `0` + time : time;
  };

  const hours = addZeroForTime(Math.floor(durationLeft / 3600));
  const minutes = addZeroForTime(Math.floor((durationLeft - (hours * 3600)) / 60));
  const seconds = addZeroForTime(Math.floor(durationLeft - (hours * 3600) - (minutes * 60)));

  return `${hours}:${minutes}:${seconds}`;
};
