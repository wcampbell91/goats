import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';

import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    // ^^ Expects static propTypes
    goats: PropTypes.arrayOf(goatShape.goatShape),
    // need the PropTypes here because we are working with an array of objects, so we need to use the arrayOf() method...
  }

  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
    <Goat key={goat.id} goat={goat}/>
    ));

    return (
      <div>
        <h2>GET YOUR GOAT</h2>
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
