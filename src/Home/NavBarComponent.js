import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { withRouter, matchPath } from 'react-router';
import classNames from 'classnames';

class NavBar extends Component {

    render() {
        const { location: { pathname } } = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Demo</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={classNames({ ['active']: location.pathname === '/' })}>
                                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                            </li>
                            <li className={classNames({ ['active']: location.pathname === '/about' })}>
                                <NavLink to="/about" activeClassName="active" exact>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);