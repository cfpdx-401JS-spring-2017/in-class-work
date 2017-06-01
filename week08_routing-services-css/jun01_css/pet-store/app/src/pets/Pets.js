import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Pets.css';
import PetDetail from './PetDetail';

export default class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  
  componentDidMount() {
    fetch('/api/pets')
      .then(res => res.json())
      .then(pets => this.setState({ pets }))
      .catch(error => console.log(error));
  }

  render() {
    const { match } = this.props;
    const { pets } = this.state;

    return (
      <div>
        <h2>All Our Pets</h2>
        <table>
          <thead>
            <tr>
              <td>Name</td><td>Legs</td><td>Store</td>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => 
              <Pet 
                key={pet._id} 
                to={`${match.url}/${pet._id}`}
                {...pet}/>
            )}
          </tbody>
        </table>
        <section className="pet-detail">
          <Route path={`${match.url}/:petId`} render={({ match }) => {
            return <PetDetail petId={match.params.petId}/>;
          }}/>
        </section>
      </div>
    );
  }
}

function Pet({ to, name, legs, store }) {
  return (
    <tr>
      <td><Link to={to}>{name}</Link></td>   
      <td>{legs}</td>   
      <td><Link to={`/stores/${store._id}`}>{store.name}</Link></td>
    </tr>
  );
}
