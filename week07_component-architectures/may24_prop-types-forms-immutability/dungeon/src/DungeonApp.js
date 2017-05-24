import React, { Component } from 'react';
import Hero from './Hero';
// import Dungeon from './Dungeon';

class App extends Component {

  constructor() { 
    super();

    const health = 100;
    
    this.state = {
      hero: {
        name: 'Hero',
        health,
        maxHealth: health
      }
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>The Dungeon</h1>
        </header>
        <main className="dungeon">
          <Hero hero={this.state.hero}/>
          {/*<Dungeon />*/}
        </main>
      </div>  
    );
  }
}

export default App;
