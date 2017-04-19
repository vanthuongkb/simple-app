import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                Home Content
                <br />
                <NavLink to="/about">About</NavLink>
            </div>
        );
    }
}

export default Home;