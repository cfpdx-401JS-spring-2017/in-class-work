import React, { Component } from 'react';
import Drunk from './Drunk';
import Pool from './Pool';

export default class Welcome extends Component {

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <button onClick={() => this.props.changeScene(Drunk)}>
                    Go to Bar
                </button>
                <button onClick={() => this.props.changeScene(Pool)}>
                    Go to Pool
                </button>
            </div>
        );
    }
}