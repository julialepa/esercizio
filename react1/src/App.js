import React, { Component } from 'react';
import './App.css';
import Post from './Post'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mio_array : [
        {
          id: 1,
          name: 'Jessica'
        },
        {
          id: 2,
          name: 'Marco'
        },
        {
          id: 3,
          name: 'Julia'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        {
         this.state.mio_array.map((item, index)=><Post id={item.id} name={item.name} />)
        }
      </div>
    );
  }
}

export default App;
