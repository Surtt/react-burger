import PropTypes from "prop-types";

export const dataTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  _v: PropTypes.number,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
