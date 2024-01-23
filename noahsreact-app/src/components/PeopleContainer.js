import React, { useEffect, useState } from 'react'
import Card from './card'

export default function PeopleContainer() {
  const[ people, setPeople] = useState([]);

  useEffect(()=>{
    fetch("https://65af65cf2f26c3f2139a9e9c.mockapi.io/person").then(
      (res) => res.json().then((data) => {
        setPeople(data);
      })
    );
  }, [])
  return (
    <div>
        <h1>people  </h1>
        <div className='grid grid-cols-2 lg:grid-cols-4  gap-4'>
         
        {people.map(element => {
          return <Card name={personalbar.name} imageUrl={personalbar.avatar} title={personalbar.jobtitle}/>
        })}</div>
    </div>
  )
}
