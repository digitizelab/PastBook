import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                            PastBook
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/photo-book">
                                    Photo Book
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us">
                                    Submit a Request
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        );
    };
}

export default Header;