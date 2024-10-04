import React from 'react'

const Button = (props) => {
  return (
    <div className={`cursor-pointer flex justify-center items-center ${props.className}`}>{props.text}</div>
  )
}

export default Button