import React,{useState} from 'react';
import Button from './Button';
import Form from './Form';

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