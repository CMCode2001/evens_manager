import React from 'react';
import "../css/bootstrap.min.css";
import "../css/style.css";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div >
            <div className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp " data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h1 className="text-primary">Sama <span className="text-dark">Bëss</span></h1>
                                <p className="lh-lg mb-4"> <b>Sama Bëss</b> est la première plateforme de son genre dans l’événementiel qui a pour vocation de regrouper l’ensemble des types de prestation lié à l’organisation d’un événement au SÉNÉGAL …</p>
                                <div className="footer-icon d-flex">
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="">
                                        <FaFacebookF />
                                    </a>
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="">
                                    <FaTwitter />
                                        </a>
                                    <a href="#" className="btn btn-primary btn-sm-square me-2 rounded-circle">
                                        <FaInstagram />
                                        </a>
                                    <a href="#" className="btn btn-primary btn-sm-square rounded-circle">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Special Facilities</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <a className="text-body mb-3" href=""><i className="fa fa-check text-primary me-2"></i>Cheese Burger</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check text-primary me-2"></i>Sandwich</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check text-primary me-2"></i>Panner Burger</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check text-primary me-2"></i>Special Sweets</a>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Contact Us</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i> 123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt text-primary me-2"></i> (+012) 3456 7890 123</p>
                                    <p><i className="fas fa-envelope text-primary me-2"></i> info@example.com</p>
                                    <p><i className="fa fa-clock text-primary me-2"></i> 26/7 Hours Service</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Social Gallery</h4>
                                <div className="row g-2">
                                    <div className="col-4">
                                        <img src="img/menu-01.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="img/menu-02.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="img/menu-03.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="img/menu-04.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="img/menu-05.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                    <div className="col-4">
                                        <img src="img/menu-06.jpg" className="img-fluid rounded-circle border border-primary p-2" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light">
                                <a href="#">
                                    <i className="fas fa-copyright text-light me-2">
                                    </i>Sama Bëss
                                </a>
                                , Tous droits réservés.
                            </span>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-end text-white">
                        <span className="text-couleur">
                            Design by &nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                             @author: CMC/BFDC/PapaFaly666/Pegasus77/NiakoDev
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="btn btn-md-square btn-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>

        </div>
    );
}

export default Footer;
