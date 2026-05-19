import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <Link className="navbar-brand fw-bold" to="/">Tulia twende africa</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/destinations">Destinations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact us</Link>
                    </li>
                </ul>

                <div className="d-flex">
                    <Link className="btn btn-warning fw-semibold" to="/book">
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;