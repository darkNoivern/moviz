import React from 'react'
import "./style.css";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" exact to="/">
                        MOVIZ
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavLink activeClassName="active" className="nav-link" exact to="/">
                                Home
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/favourites">
                                Favourites
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/watchlist">
                                WishList
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
