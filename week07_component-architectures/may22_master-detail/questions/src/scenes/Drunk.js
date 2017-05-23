import React, { Component } from 'react';

// hard-coded drink data
const drinks = [
    { name: 'beer', alcohol: 1 },
    { name: 'pina', alcohol: 2 },
    { name: 'super pina', alcohol: 4 },
    { name: 'mai tai', alcohol: 3 },
    { name: 'jager', alcohol: 2 }
];

export default class Drunk extends Component {

    constructor(props) {
        super(props);
        // local state for this component:
        this.state = {
            drunk: []
        };
    }   
    
    haveADrink(drink) {
        // get our props from state
        let { drunk } = this.state;
        // increase blood alcohol level based on 
        // alcohol content of selected drink
        this.props.addAlcohol(drink.alcohol);

        // immutable style state change,
        // copy the array
        drunk = drunk.slice();
        // push into the new copy
        drunk.push(drink);
        // set state with new array and new alcohol blood level:
        this.setState({ drunk });

    }

    render() {
        // reference the drunk state
        const { drunk } = this.state;

        return (
            <div>
                <h1>Drunk</h1>
                <h2>Choose a Drink</h2>
                {
                    /* show each drink as a choice */
                    drinks.map(drink => (
                        <button
                            key={drink.name}
                            onClick={() => this.haveADrink(drink)}>
                                Have a {drink.name}!
                        </button>
                    ))
                }
                <h2>You've knocked back {drunk.length} drinks
                    {[
                        drunk.length > 2 && <span key=">2">Wow!</span>,
                        drunk.length > 4 && <span key=">4">OMG!</span>
                    ]}
                </h2>
                <ul>
                    {drunk.map((d, i) => <li key={i}>{d.name}</li>)}
                </ul>
                
            </div>
        );
    }
}