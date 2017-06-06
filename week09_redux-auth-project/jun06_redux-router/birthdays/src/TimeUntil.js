import React from 'react';

export default function TimeUntil({ name, birthday }) {
  let now = new Date();
  now = new Date(`${now.getMonth()+1}/${now.getDate()}`);
  const diff = birthday.getTime() - now.getTime();
  const days = Math.floor(diff/(1000*60*60*24)); 
  
  return (
    <p>
      There are {days} days until {name}'s birthday.
    </p>
  );
}
