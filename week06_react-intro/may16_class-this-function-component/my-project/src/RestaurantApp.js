import React, { Component } from 'react';
import moment from 'moment';


const Title = () => <span><em>Top</em> Restaurants</span>;

function Header(Component) { 
    return <h2>
        <Component />
    </h2>;
}



class RestaurantApp extends Component {
    constructor() {
        super();
        
        this.state = {
            loading: true,
            restaurants: [],
            gradingDate: new Date('5/1/2017')
        };
      
    }

    componentDidMount() {
        this.loadTop();
    }

    loadTop() {
        this.setState({
            loading: true,
            restaurants: []
        });
        fetch('/api/restaurants/top')
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    restaurants,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        // main render function for whole App
        const header = Header(Title);
        return (
            <div>
                {header}
                {moment(this.state.gradingDate).fromNow()}
                {this.state.loading ? <div>Loading...</div> : null}
                <ul>
                    {this.state.restaurants.map((restaurant, i) => <li key={i}>
                        {restaurant.name} in
                        {restaurant.borough}
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default RestaurantApp;
