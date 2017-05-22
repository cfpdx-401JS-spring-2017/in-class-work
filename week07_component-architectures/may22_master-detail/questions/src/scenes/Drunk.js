import React, { Component } from 'react';
import Lost from './Lost';

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
            drunk: [],
            alcohol: 0
        };
    }   
    
    haveADrink(drink) {
        // get our props from state
        const { drunk, alcohol } = this.state;
        // increase blood alcohol level based on 
        // alcohol content of selected drink
        const newAlcohol = alcohol + drink.alcohol;

        // if over 10, look out too much fun
        if (newAlcohol > 10) {
            this.props.changeScene(Lost, { drinks: drunk.length });
        }
        else {
            // immutable style state change,
            // copy the array
            drunk = drunk.slice();
            // push into the new copy
            drunk.push(drink);
            // set state with new array and new alcohol blood level:
            this.setState({
                drunk,
                alcohol: newAlcohol
            });
        }
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
                <h2>You've knocked back {drunk.length} drinks</h2>
                <ul>
                    {drunk.map((d, i) => <li key={i}>{d.name}</li>)}
                </ul>
                
            </div>
        );
    }
}