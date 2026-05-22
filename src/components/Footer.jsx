import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container-fluid px-5">
                <div className="row justify-content-between">
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Tulia Twende Africa</h5><br />
                        <p className="footer-muted">Your gateway to unforgettable African adventures.</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Reach Out</h5><br />
                        <p className="footer-muted mb-1">Email: info@tuliawendeafrica.com</p>
                        <p className="footer-muted mb-1">Phone: +254 700 000 000</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-bold">Follow Us</h5><br />
                        <p className="footer-muted mb-3">
                            Stay connected with our latest updates.
                        </p>

                        <div className="d-flex gap-3">
                            <a href="#" className="text-white fs-5 social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white fs-5 social-icon">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white fs-5 social-icon">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white fs-5 social-icon">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                </div>  
            </div>
            <div className="container mt-4">
                <div className="text-center pt-3 mx-auto"style={{borderTop: "1px solid rgba(255, 255, 255, 0.15)",maxWidth: "900px"}}>
                    <p className="mb-0 footer-muted">
                        © 2026 Tulia Twende Africa
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer