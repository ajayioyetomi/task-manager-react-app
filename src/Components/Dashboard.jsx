import React ,{useState}from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

const Dashboard = () => {
  return (
    <React.Fragment>
        <AddTask/>
        <Tasks />
    </React.Fragment>
  )
}

export default Dashboard