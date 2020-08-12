import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    // ^^ don't need PropTypes here because it's only working on one goat with that goatShape.goatShape, shape...
    takeAGoat: PropTypes.func,
    releaseAGoat: PropTypes.func,
  };

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  };

  releaseGoatEvent = (e) => {
    e.preventDefault();
    const { goat, releaseAGoat } = this.props;
    releaseAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <img className="card-img-top" src={ goat.imgUrl} alt="one specific goat" />
        <div className="card-img-overlay">
          <h5 className="card-title">{ goat.name }</h5>
          <p className="card-text">This thang is {goat.age} years old. it's {goat.description}</p>

        </div>
        <div className="card-footer row">
          {
            goat.isTaken ? (
              <button className="btn btn-danger col-12"onClick={this.releaseGoatEvent}>FREE THE GOAT</button>
            ) : (
              <button className="btn btn-success col-12"onClick={this.takeGoatEvent}>TAKE THE GOAT</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Goat;
