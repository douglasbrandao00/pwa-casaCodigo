import React from 'react'

export default (props) => {
  const estilo = {
    borderColor: props.invalidValue ? '#d50000' : '#cccccc',
    backgroundColor: props.invalidValue ? '#ffcdd2' : '#ffffff'
  }
  return (
    <input
      type="text"
      style={style}
      {...props}
    />
      
  )
}
