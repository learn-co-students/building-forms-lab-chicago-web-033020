import React from 'react'


const Band = props => {
  console.log(props)
  return (
    <div>
      <li>{props.band}</li>
    </div>
  )
}

export default Band
