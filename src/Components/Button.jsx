import React from 'react'

const Button = ({children,click,status}) => {
  return (
    <React.Fragment>
        <button onClick={click}>{status?"Close":children}</button>
    </React.Fragment>
    
  )
}

Button.defaultProps = {
    children:"Add Task",
}

export default Button