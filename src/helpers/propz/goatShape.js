import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isTaken: PropTypes.bool.isRequired,
});

// ^^ This defines what will be expected of a prop that is passed to a component, so you need to add static propType = {} to
// wherever is receving a prop AKA GoatCorral.js and Goat.js

export default { goatShape };
