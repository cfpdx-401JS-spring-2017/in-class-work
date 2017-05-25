import React, { Component } from 'react';
import Hero from './Hero';
import Room from './Room';
// import the startingRoom (is rooms[0])
import startingRoom from './rooms';

class App extends Component {

  constructor() { 
    super();

    const health = 100;
    
    this.state = {
      // this is user data for display
      hero: {
        name: 'Hero',
        health,
        maxHealth: health
      },
      // room will track what room user is current in
      room: startingRoom
    }

    // bind this.exitRoom so we can easily pass
    // as "callback" to change room
    this.exitRoom = this.exitRoom.bind(this);
  }

  exitRoom(room) {
    // update current room
    this.setState({ room });
  }

  render() {
    return (
      <div>
        <header>
          <h1>The Dungeon</h1>
        </header>
        <main className="dungeon">
          <Hero hero={this.state.hero} />
          {/* pass in current room AND callback to change room */}
          <Room room={this.state.room} onExit={this.exitRoom}/>
        </main>
      </div>  
    );
  }
}

export default App;
