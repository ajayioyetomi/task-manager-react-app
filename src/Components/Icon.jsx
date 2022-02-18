import React from 'react'
import '../Css/icons/bootstrap-icons.css';
import '../Css/icons.css';


const Icon = ({name}) => {
  return (
    <i className={`${name} icon`}></i>
  )
}

export default Icon