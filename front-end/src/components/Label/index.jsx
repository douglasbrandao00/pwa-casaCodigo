import React from 'react'

export default (props) => {
  const style = {
    color: props.invalidValue ? '#d50000' : '#444'
  }
  return (
    <label 
      style={style}
      htmlFor={props.for}>
      {props.text}
    </label>
  )
}
