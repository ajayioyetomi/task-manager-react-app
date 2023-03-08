import Logo from '../images/logo.png';
import '../css/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';


const alt = "alt";
const Nav = ()=>{
    return(
        <React.Fragment>
        <header>
            <nav className="nav">
                <div>
                    <span></span>
                    <Link to="/"><img src={Logo} alt={alt}/>
                        <span className='task-manager'>TASK-MANAGER</span>
                    </Link>
                </div>
                <div>
                    <ul className="nav-list">
                        <li className="floatR"><Link to="/login">Log in</Link></li>
                        <li className="floatR"><Link to="/sign-up">Sign Up</Link></li>
                    </ul>

                </div>
            </nav>
        </header>
    </React.Fragment>
    )
}

export default Nav;