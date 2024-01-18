import React from 'react'

export default function card(name, title, imageUrl ) {
  return (
    <div className='border'>
        <div>
            <h2>{Name}</h2>
            <h4>{title}</h4>
        </div>
        <div>

            <img src={imageUrl}alt=''/>
        </div>

    </div>
  )
}

