import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                About Content
                <br />
                <NavLink to="/">Home</NavLink>
            </div>
        );
    }
}

export default About;