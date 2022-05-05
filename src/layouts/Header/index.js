import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/artists">Artists</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/random">Randomiser</NavLink>
                <NavLink to="/artists">Artists</NavLink>
            </nav>
    </>
}

export default Header;
