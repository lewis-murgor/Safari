import { Link } from 'react-router-dom'
import './About.css'
import CTA from '../components/CTA'

function About() {
    return (
        <>
            <section className="about-hero d-flex align-items-center text-white">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead mt-3">
                        Crafting unforgettable African safari experiences with passion,
                        authenticity, and local expertise.
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">Our Story</h2>
                    <p className="text-muted mb-4 text-center">
                        We are a team of passionate travelers and conservationists dedicated to creating meaningful connections between visitors and the natural world.
                    </p>
                    <p className="text-muted mb-4 text-center">
                        From the plains of the Maasai Mara to the beaches of Zanzibar,
                        we create journeys designed around adventure, comfort,
                        and unforgettable memories.
                    </p>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="mission-vision row align-items-center g-4">
                        <div className="col-md-6">
                            <img
                                src="https://govolunteerafrica.org/wp-content/uploads/2019/12/Kenya-Safari-Volunteering-678x381.png"
                                alt="Mission"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h3 className="fw-bold mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-muted mb-0">
                                    Our mission is to provide world-class safari experiences that connect
                                    travelers with Africa’s wildlife, people, and natural beauty. We believe travel should inspire, educate, and create
                                    memories that last a lifetime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="mission-vision row align-items-center g-4">
                        <div className="col-md-6">
                            <div className="about-content">
                                <h3 className="fw-bold mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-muted mb-0">
                                    To become Africa’s most trusted safari brand,
                                    delivering authentic adventures with exceptional service. We envision a future where travelers experience Africa
                                    not just as tourists, but as explorers deeply connected
                                    to its beauty and heritage.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://nairobinationalparksafaris.com/wp-content/uploads/luxury-hotel-near-nairobi-national-park.jpg"
                                alt="Vision"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
        
    );
}

export default About