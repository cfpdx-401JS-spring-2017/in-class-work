import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Room extends Component {

    constructor() {
        super();
        console.log('in Room constructor');
    }    

    // define expected props    
    static propTypes = {
        room: PropTypes.object.isRequired,
        onExit: PropTypes.func.isRequired
    }    

    render() { 
        // reference props and sub-props for
        // simpler template use below
        const { room, onExit } = this.props;
        const { name, description, exits } = room;

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>
                    {exits.map(exit => <Exit
                        key={exit.key}
                        room={exit.room}
                        door={exit.door}
                        onExit={onExit} />
                    )}
                </ul>
            </div>
        );
    }
}

function Exit({ room, door, onExit }) {
    return (
        <li>
            <button onClick={() => onExit(room)}>
                {door}
            </button>
        </li>
    );
}

