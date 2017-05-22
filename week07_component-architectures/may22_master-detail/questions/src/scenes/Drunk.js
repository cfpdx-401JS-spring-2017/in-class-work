import React, { Component } from 'react';
import Lost from './Lost';

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
        this.state = {
            drunk: [],
            alcohol: 0
        };
    }   
    
    haveADrink(drink) {
        let { drunk, alcohol } = this.state;
        alcohol += drink.alcohol;
        console.log(alcohol);
        if (alcohol > 10) {
            this.props.changeScene(Lost);
        }
        else {
            drunk = drunk.slice();
            drunk.push(drink);
            this.setState({
                drunk,
                alcohol
            });
        }
    }

    render() {
        const { drunk } = this.state;

        return (
            <div>
                <h1>Drunk</h1>
                <h2>Choose a Drink</h2>
                {drinks.map(drink => {
                    return <button key={drink.name} onClick={() => this.haveADrink(drink)}>
                        Have a {drink.name}!
                    </button>
                })}
                <h2>You've knocked back {drunk.length} drinks</h2>
                <ul>
                    {drunk.map((d, i) => <li key={i}>{d.name}</li>)}
                </ul>
            </div>
        );
    }
}