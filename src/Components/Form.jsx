import React, {useState}from 'react';
import {Input,Label} from '.';
import '../css/Form.css';

const Form = ({showForm}) => {
  const [inputVals,setInputVals] = useState({});
  const handleInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputVals(inputVals =>({...inputVals,[name]:value}));
  //  console.log(inputVals)
  }
  
  return (
    <React.Fragment>
      { showForm &&
        <form>
            <p>
              <Label>Task Title</Label>
              <br/>
              <Input name="title" placeholder="Please Enter task Title" type="text" value={inputVals.title || ""} click={handleInput}/>
            </p>
            <p>
              <Label>Task Date</Label>
              <br/>
              <Input name="date" placeholder="Please Enter task Date" type="date" value={inputVals.date || ""} click={handleInput}/>
            </p>
            <p>
              <Label>Task Time</Label>
              <br/>
              <Input name="time" placeholder="Please Enter task Time" type="time" value={inputVals.date || ""} click={handleInput}/>
            </p>
            <p>
              <Label>Task status</Label>
              <br/>
              <Input name="reminder" placeholder="" type="checkbox" value={inputVals.date || ""} click={handleInput}/>
            </p>
        </form>
      }
        
    </React.Fragment>
  )
}

export default Form