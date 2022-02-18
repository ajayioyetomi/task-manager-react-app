import Logo from '../Images/logo.png';
import '../Css/Nav.css';
import React from 'react';


const alt = "alt";
const Nav = ()=>{
    return(
        <React.Fragment>
        <header>
            <nav className="nav">
                <div>
                    <span></span>
                    <a href="/"><img src={Logo} alt={alt}/>
                        <span className='task-manager'>TASK-MANAGER</span>
                    </a>
                </div>
                <div>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">About</a></li>
                        <li className="floatR"><a href="/">Log in</a></li>
                        <li className="floatR"><a href="/">Sign Up</a></li>
                    </ul>

                </div>
            </nav>
        </header>
    </React.Fragment>
    )
}

export default Nav;