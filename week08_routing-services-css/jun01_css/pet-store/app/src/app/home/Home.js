import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Marquee(props) {
  return (
    <div className="marquee">
      <p>
        {props.children}
      </p>
    </div>
  );
}

export default function Home({ match, location, history }) {
  return (
    <div>
      <h2>Home Page</h2>

      <Marquee>
        Welcome to the <strong>online</strong> pet store
      </Marquee>

      <Marquee>
        Get started with <Link to="/stores">Stores</Link>.
      </Marquee>

      <Marquee>
        Take a look at our <Link to="/pets">Pets</Link>.
      </Marquee>
    </div>
  );
}

