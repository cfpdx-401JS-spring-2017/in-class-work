import React, { Component } from 'react';

export default class PetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pet: null 
    };
  }

  componentDidMount() {
    this.fetchPet(this.props.petId);
  }

  componentWillReceiveProps({ petId }) {
    this.fetchPet(petId);
  }

  fetchPet(petId) {
    fetch(`/api/pets/${petId}`)
      .then(res => res.json())
      .then(pet => this.setState({ pet }))
      .catch(error => console.log(error));
  }

  render() {
    const { pet } = this.state;

    if(!pet) return null;

    return (
      <div>
        <p>{pet.name} with {pet.legs || 'unknown'} legs</p>
        <p>Housed at {pet.store.name}</p>
        <h4>Favorite Toys</h4>
        <ul>
          {pet.toys && pet.toys.map(({ name }, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>

      </div>
    );
  }
}