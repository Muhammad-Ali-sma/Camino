import React from 'react'

const Button = (props) => {
  return (
    <button className={`custom-btn ${props.className ?? ""}`} style={props.btnStyle ?? {}} onClick={props.onClick} disabled={props.disabled ?? false}>{props.title}</button>
  )
}

export default Button