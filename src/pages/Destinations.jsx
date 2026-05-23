import { useEffect, useState } from 'react'
import api from '../api'
import "./Destinations.css"

function Destinations() {
    const [tours, setTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("tours/")
            .then((response) => {
                setTours(response.data);
                setFilteredTours(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tours:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = tours.filter((tour) =>
            tour.title.toLowerCase().includes(term.toLowerCase()) ||
            tour.location.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredTours(filtered);
    };
    if (loading) {
        return <h2 className="text-center my-5">Loading Tours...</h2>;
    }
    return (
        <>
            <section className="destinations-hero d-flex align-items-center text-white">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Explore Our Destinations</h1>
                    <p className="lead mt-3">Discover unforgettable African adventures tailored for you.</p>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control form-control-lg search-input"
                                placeholder="Search destinations..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {filteredTours.map((tour) => (
                            <div key={tour.id} className="col-md-4">
                                <div className="tour-card h-100">
                                    <img src={tour.image} className="tour-image" alt={tour.title} />
                                    <div className="p-4">
                                        <p className="tour-location">
                                            📍 {tour.location}
                                        </p>
                                        <h5 className="fw-bold mb-3">{tour.title}</h5>
                                        <p className="text-muted">{tour.description.slice(0, 100)}...</p>
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <h5 className="fw-bold text-warning">
                                                Ksh {tour.price}
                                            </h5>
                                            <a
                                                href={`/tours/${tour.id}`}
                                                className="btn btn-dark"
                                            >
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
        
    );
}

export default Destinations;