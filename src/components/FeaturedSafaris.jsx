import { useEffect, useState } from "react"
import api from "../api"
import "./FeaturedSafaris.css"

function FeaturedSafaris() {
    const [featuredTours, setFeaturedTours] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        api.get("tours/")
            .then((response) => {
                 const featured = response.data.filter(
                    (tour) => tour.is_featured === true
                );
                setFeaturedTours(featured);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tours:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4 fw-bold">Featured Safaris</h2>
            <div className="row">
                {featuredTours.map((tour) => (
                    <div key={tour.id} className="col-md-4">
                        <div className="card safari-card shadow-sm">
                            <img src={tour.image} className="card-img-top safari-img" alt={tour.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{tour.title}</h5>
                                <p>price: Ksh{tour.price}</p>
                                <a href={`/tours/${tour.id}`} className="btn btn-warning">View Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedSafaris