import React from 'react'

const Input = ({type,value,onChange,placeholder}) => {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    value={value}
    onChange={onChange}/>
  )
}

export default Input