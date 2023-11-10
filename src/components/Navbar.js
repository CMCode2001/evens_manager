import React from 'react';
import { Link } from 'react-router-dom';
import "../css/bootstrap.min.css";
import "../css/style.css";
import { FaUserCircle } from "react-icons/fa";
// import AvatarComponent from './AvatarComponent';
const Navbar = () => {
    return (
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <Link to = "/" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">
                            Sama <spa className="text-dark">Bëss</spa> 
                        </h1>
                    </Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to = "/" className="nav-item nav-link active">Accueil</Link>
                            <Link to = "/events" className="nav-item nav-link">Events</Link>
                            <Link to = "/prestataires" className="nav-item nav-link">Prestataires</Link>                    
                            <Link to = "/about" className="nav-item nav-link">A propos</Link>
                            {/* <Link to = "/login" className="nav-item nav-link">Login</Link> */}

                            {/* Plus de liens ici */}
                        </div>
                        <Link to = "/login">
                            <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <FaUserCircle />
                            </button>
                        </Link>
                    </div>
                </nav> 
            </div>
        </div>
    );
}

export default Navbar;
