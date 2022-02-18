import React from 'react'

const Input = ({name,type,value,placeholder,click}) => {
  const handleClick=(e)=>{
    click(e);
  }
  return (
    <React.Fragment>
        <input name={name} type={type} value={value} placeholder={placeholder} onInput={(e)=>handleClick(e)}/>
    </React.Fragment>
  )
}

export default Input