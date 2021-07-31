import React from 'react';
import { Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import "./Navbar.css";


const Navbar = (props) => {
    let { user, changeUser } = props.user;

    let links = [];
    if(Object.keys(user).length === 0){
        links = [
            (<a className="navlink navlink-left" key="locations" href="/locations">Locations</a>),
            (<a className="navlink" key="signup" href="/signup">Sign Up</a>),
            (<a className="navlink navlink-right" key="login" href="/login">Log In</a>)
        ];
    } else {
        links = [
            (<a className="navlink navlink-left" key="locations" href="/locations">Locations</a>),
            (<a className="navlink" key="profile" href="/profile">Profile</a>),
            (<a className="navlink navlink-right" key="logout" href="/logout">Logout</a>)
        ];
    }
    return (
        <header position="sticky" className="header">
            <Toolbar>
                <IconButton edge="start" href="/">
                    <HomeIcon />
                </IconButton>
                <div className="nav">
                    <ul>{links}</ul>
                </div>
            </Toolbar>
        </header>
    )
}

export default Navbar
