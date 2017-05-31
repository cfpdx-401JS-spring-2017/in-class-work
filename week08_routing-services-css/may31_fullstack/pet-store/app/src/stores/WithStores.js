import { Component } from 'react';

export default class WithStores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: null
    };
  }

  componentDidMount() {
    fetch('/api/stores')
      .then(res => res.json())
      .then(stores => this.setState({ stores }))
      .catch(error => console.log(error));
  }

  render() {
    const { stores } = this.state;
    const { match } = this.props;
    if(!stores) return null;

    return this.props.children(stores);
  }
}