import React, { Component } from 'react'
import './App.css'
import Main from './components/main/main'
import Carousel from 'nuka-carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        {/* <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"/></a> */}
      </div>
    );
  }
}

export default App;
