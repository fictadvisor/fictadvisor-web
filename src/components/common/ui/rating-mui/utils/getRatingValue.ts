const getRatingValue = (isLongVariant: boolean, rating: number) => {
  return isLongVariant ? changeRating(rating) : rating / 5;
};

const changeRating = (rating: number) => {
  const number = Math.trunc(rating);
  let remainder = rating - number;
  if (remainder < 0.5) {
    remainder = (0.3 * remainder) / 0.5 + 0.2;
  } else if (remainder > 0.5) {
    remainder = (0.3 * (remainder - 0.5)) / 0.5 + 0.7;
  }
  return number + remainder;
};
export default getRatingValue;
