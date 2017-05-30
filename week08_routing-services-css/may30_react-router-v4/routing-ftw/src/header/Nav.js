import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: ['thumbnail', 'gallery', 'list'],
      view: 'thumbnail'
    }
  }
  render() {
    const { views, view } = this.state;
    return (
      <nav>
        {views.map(view => (
          <button key={view} onClick={() => this.props.history.push({
              search: `?view=${view}`
            })}>
            {view}
          </button>
        ))}
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to={`/stores?view=${view}`}>
                Stores
              </Link>
            </li>
            <li>
              <Link to={`/pets?view=${view}`}>
                Pets
              </Link>
            </li>
        </ul>
    </nav>
    );
  }
}