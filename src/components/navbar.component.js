import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component{

    render(){

        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg nav-padding">
                <Link to='/' className="navbar-brand">Home</Link>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto ">
                        <li className="navbar-item">
                            <Link to='/' className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/create' className="nav-link">Create Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/users' className="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>



            /* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */






        )
    }
}