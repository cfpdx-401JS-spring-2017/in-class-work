import React, { Component } from 'react';
import GoToLobby from './GoToLobby';

export default class Pool extends Component {

    render() {
        return (
            <div>
                <h1>Pool</h1>
                <p>Sun is bright, water is cool</p>
                <button onClick={() => this.props.addItem('tan')}>
                    Work on Tan
                </button>
                <button onClick={() => { } }>
                    Take a Swim
                </button>  
                <button onClick={() => this.props.changeScene()}>
                    Go Back to Lobby
                </button>
            </div>
        );
    }
}