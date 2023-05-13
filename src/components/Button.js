import React from 'react'

const Button = ({action,onClick}) => {
  return (
    <button onClick={onClick}>{action}</button>
  )
}

export default Button