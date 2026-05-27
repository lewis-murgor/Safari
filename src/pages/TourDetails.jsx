import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";
import "./TourDetails.css";

function TourDetails() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/tours/${id}`)
            .then((response) => {
                setTour(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tour details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h2 className="text-center my-5">Loading...</h2>;
    }

    if (!tour) {
        return <h2 className="text-center my-5">Tour not found.</h2>;
    }

    return (
        <>
            <section 
                className="tour-hero py-5" 
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0,0,0,0.5),
                        rgba(0,0,0,0.5)
                    ), url(${tour.image})`
                }}>
                <div className="container text-white text-center">
                    <h1 className="display-3 fw-bold">
                        {tour.title}
                    </h1>

                    <p className="lead mt-3">
                        {tour.location}
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-8">
                            <h2 className="fw-bold mb-4">
                                Tour Overview
                            </h2>

                            <p className="text-muted mb-5">
                                {tour.description}
                            </p>

                            <h3 className="fw-bold mb-3">
                                Itinerary
                            </h3>

                            <ul className="itinerary-list mb-5">

                                {tour.itinerary
                                    .split("\n")
                                    .filter((item) => item.trim() !== "")
                                    .map((item, index) => (

                                        <li key={index}>
                                            {item}
                                        </li>

                              ))}

                            </ul>

                            <h3 className="fw-bold mb-3">
                                Inclusions
                            </h3>

                            <ul className="details-list mb-5">

                                {tour.inclusions
                                    .replace(" and ", ",")
                                    .split(",")
                                    .filter((item) => item.trim() !== "")
                                    .map((item, index) => (

                                        <li key={index}>
                                            ✅ {item.trim()}
                                        </li>

                                ))}

                            </ul>

                            <h3 className="fw-bold mb-3">
                                Exclusions
                            </h3>

                            <ul className="details-list">

                                {tour.exclusions
                                    .replace(" and ", ",")
                                    .split(",")
                                    .filter((item) => item.trim() !== "")
                                    .map((item, index) => (

                                        <li key={index}>
                                            ❌ {item.trim()}
                                        </li>

                                ))}

                            </ul>
                        </div>
                        <div className="col-md-4">

                            <div className="booking-card">

                                <h3 className="fw-bold mb-4">
                                    Safari Details
                                </h3>

                                <p>
                                    🕒 Duration:
                                    <strong> {tour.duration}</strong>
                                </p>

                                <p>
                                    💰 Price:
                                    <strong> Ksh {tour.price}</strong>
                                </p>

                                <Link
                                    to={`/book/${tour.id}`}
                                    className="btn btn-warning w-100 mt-4"
                                >
                                    Book This Safari
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TourDetails;