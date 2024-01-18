import React from 'react'
import Card from './card'

export default function PeopleContainer() {
  return (
    <div>
        <h1>people  </h1>
        <div>
        <Card name="hans" title="ceo" imageUrl="https://picsum.photos/200/300"/>
        <Card name="hans" title="ceo" imageUrl="https://picsum.photos/200/300"/>
        <Card name="hans" title="ceo" imageUrl="https://picsum.photos/200/300"/>
        </div>
    </div>
  )
}
