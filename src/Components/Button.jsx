const Button = ({children,click,status}) => {
  return (
    <>
        <button onClick={click}>{status?"Close":children}</button>
    </>
    
  )
}

Button.defaultProps = {
    children:"Add Task",
}

export default Button