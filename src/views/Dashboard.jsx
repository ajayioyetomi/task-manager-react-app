import React from 'react';
import {AddTask,Tasks} from '../components';

const Dashboard = () => {
  return (
    <React.Fragment>
        <AddTask/>
        <Tasks />
    </React.Fragment>
  )
}

export default Dashboard