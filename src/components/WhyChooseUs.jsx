import "./WhyChooseUs.css";
import { FaMapMarkedAlt, FaHeart, FaShuttleVan } from "react-icons/fa";

function WhyChooseUs() {
    return (
        <section className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-3">Why Choose Us?</h2>
                <p className="lead mb-5">We provide unforgettable experiences with expert local guides and personalized service.</p>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card why-card h-100 border-0 shadow-sm p-4">
                            <div className="icon-box fa-3x text-warning mb-3">
                                <FaMapMarkedAlt />
                            </div>
                            <h4 className="card-title fw-bold">Expert Local Guides</h4>
                            <p className="card-text text-muted">Our experienced local guides provide in-depth knowledge of Africa's wildlife, culture, and history ensuring every journey is authentic, insightful and memorable.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card why-card h-100 border-0 shadow-sm p-4">
                            <div className="icon-box fa-3x text-primary mb-3">
                                <FaHeart />
                            </div>
                            <h4 className="card-title fw-bold">Affordable Luxury</h4>
                            <p className="card-text text-muted">We combine comfort and adventure to high quality experiences, thoughtfully designed to match your preferences and budget without compromising on excellence.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card why-card h-100 border-0 shadow-sm p-4">
                            <div className="icon-box fa-3x text-primary mb-3">
                                <FaShuttleVan />
                            </div>
                            <h4 className="card-title fw-bold">Top Rated Experience</h4>
                            <p className="card-text text-muted">We are trusted by travelers worldwide, delivering exceptional service and creating lasting memories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs