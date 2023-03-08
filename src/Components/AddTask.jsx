import React,{useState} from 'react';
import {Form,Button} from '.';

const AddTask = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm =()=>{
    setShowForm(!showForm);
  }
  return (
    <React.Fragment>
        <div className='form-div'>
          <Button click={handleShowForm} status={showForm}>Add Task</Button>
          <Form showForm={showForm}/>
        </div>
       
    </React.Fragment>
  )
}

export default AddTask