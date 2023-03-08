import React from 'react'
import '../css/icons/bootstrap-icons.css';
import '../css/icons.css';


const Icon = ({name}) => {
  return (
    <i className={`${name} icon`}></i>
  )
}

export default Icon