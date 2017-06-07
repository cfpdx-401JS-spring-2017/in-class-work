import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => (
  <p>
    <Link to="/auth/signin">Sign in or Sign up</Link> to get started. 
  </p>
);

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/albums">View your albums</Link>.</p>
);

export default function Home({ user }) {

  return (
    <div>
      <h1>Welcome to Image Gallery+</h1>
      {/*{ user ? <WelcomeGreeting name={user.name}/> : <GetStarted/> }*/}
    </div>
  );
}