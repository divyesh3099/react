import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div className="container">
                    <NavLink className="navbar-brand" to='/'>MyApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'Blue' : 'Black' } }} className="nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'Blue' : 'Black' } }} className="nav-link" to='/about'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
