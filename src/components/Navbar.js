import React from 'react';
import "../css/bootstrap.min.css";
import "../css/style.css";
import connexion from "../assets/img/connexion.png"

const Navbar = () => {
    return (
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Sama <span className="text-dark">Bëss</span> </h1>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href=" " className="nav-item nav-link active">Acceuil</a>
                            <a href=" " className="nav-item nav-link">Events</a>
                            <a href=" " className="nav-item nav-link">Services</a>
                            <a href=" " className="nav-item nav-link">Prestataires</a>
                            {/* Plus de liens ici */}
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal">

                            <img src={connexion} width={60} height={60}/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
