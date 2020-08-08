import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info"><i class="fas fa-carrot"></i>I am a banana!</button>
      </div>
    );
  }
}

export default App;
