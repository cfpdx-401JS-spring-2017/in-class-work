import React, { Component } from 'react';
import Drunk from './Drunk';

export default class Lost extends Component {

    render() {
        return (
            <div>
                <h1>Lost</h1>
                <p>
                    You wake up confused and unsure. Maybe you 
                    shouldn't have had {this.props.data.drinks} drinks
                </p>
                <button onClick={() => this.props.changeScene(Drunk)}>
                    Go back to Hotel Lobby
                </button>
            </div>
        );
    }
}