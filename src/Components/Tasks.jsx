import React from 'react';
import { Routes,Route, Link, useLocation } from 'react-router-dom';
import Icon from './Icon';


import '../Css/Tasks.css';
import AllTask from './AllTask';

const Tasks = () => {
  const  menus = ["All Tasks","Tasks Today","Income Tasks","Completed Tasks","Task Analysis"];
  const icons = ["bi-collection-fill","bi-stickies","bi-cash-stack","bi-clipboard-check","bi-file-earmark-bar-graph"];
  const links = ["all-task","today-task","reward-task","completed","analysis"];
  const location = useLocation();
  
  return (
    <React.Fragment>
        <section className="tasks-section">
            <div>
                <Icon name="bi-arrow-left-circle icon-btn"/>
                <ul className='menu-list'>
                    {menus.map((menu,index)=>(
                        <li key={index} className={((location.pathname.search(links[index]) > -1)?"active-task":"")}><Link to={links[index]}><Icon name={`${icons[index]} left-icon`}/>{`${menu}`}</Link> </li>
                    ))}
                </ul>               
            </div>
            <div> 
                <Routes>
                    <Route path="/dashboard/all-task" element={<AllTask/>}></Route>
                </Routes>

                  
            </div>
        </section>
    </React.Fragment>
  )
}

export default Tasks