import { Link } from 'react-router-dom'
import "./CTA.css";

function CTA() {
    return (
        <section className="cta text-white text-center d-flex align-items-center">
            <div className="container position-relative">
                <h2 className="display-4">Ready for Your African Adventure?</h2>
                <p className="lead mb-4">Book your unforgettable safari experience with us today!</p>
                <Link to="/destinations" className="btn btn-warning mt-3">
                    Explore Destinations
                </Link>
            </div>
        </section>
    );
}

export default CTA