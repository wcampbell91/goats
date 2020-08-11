import React from 'react';

import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    // don't need PropTypes here because it's only working on one goat with that goatShape.goatShape, shape...
  };

  render() {
    const { goat } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={ goat.imgUrl} alt="one specific goat" />
        <div className="card-body">
          <h5 className="card-title">{ goat.name }</h5>
          <p className="card-text">This thang is {goat.age} years old. it's {goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
