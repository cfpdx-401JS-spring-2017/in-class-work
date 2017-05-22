import React, { Component } from 'react';

export default class Lost extends Component {

    render() {
        return (
            <div>
                <h1>Lost</h1>
                <p>
                    You wake up confused and unsure.
                </p>
                <button onClick={() => this.props.changeScene()}>
                    Go back to Hotel Lobby
                </button>
            </div>
        );
    }
}