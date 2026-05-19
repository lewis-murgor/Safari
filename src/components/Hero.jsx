import "./Hero.css"

function Hero() {
    return (
        <section className="hero d-flex align-items-center text-white">
            <div className="hero-overlay"></div>
            <div className="container text-center position-relative">
                <h1 className="display-3 fw-bold">Experience the Beauty of Africa</h1>
                <p className="lead mt-3">Unforgettable experiences across Africa</p>
                <button className="btn btn-warning mt-3">Explore Destinations</button>
            </div>
        </section>
    );
}

export default Hero