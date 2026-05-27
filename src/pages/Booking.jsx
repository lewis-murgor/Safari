import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import './Booking.css'

function Booking() {
    const { id } = useParams()
    const [tour, setTour] = useState(null)
    const [formData, setFormData] = useState({
        tour: id,
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        number_of_people: 1,
        travel_date: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        api.get(`tours/${id}/`)
            .then((response) => {
                setTour(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tour details:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        

        api.post("booking/", formData)
            .then((response) => {
                setSuccess("Booking successful! We will contact you shortly.");
                setFormData({
                    tour: id,
                    customer_name: '',
                    customer_email: '',
                    customer_phone: '',
                    number_of_people: 1,
                    travel_date: '',
                });
            })
            .catch((error) => {
                console.error("Error submitting booking:", error);
                setError("Failed to submit booking. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (!tour) {
        return <h2 className="text-center py-5">Loading tour details...</h2>;
    }

    return (
        <section className="booking-page py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-5">
                        <div className="booking-summary">
                            <img src={tour.image} alt={tour.title} className="img-fluid rounded-4 mb-3" />
                            <h2 className="fw-bold">
                                {tour.title}
                            </h2>

                            <p className="text-muted">
                                {tour.location}
                            </p>

                            <p className="mt-4">
                                {tour.description}
                            </p>

                            <hr />

                            <p>
                                Duration:
                                <strong> {tour.duration}</strong>
                            </p>

                            <p>
                                Price:
                                <strong> Ksh {tour.price}</strong>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="booking-form-card">
                            <h2 className="fw-bold mb-4">
                                Book This Safari
                            </h2>
                            {success && <div className="alert alert-success">{success}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="customer_name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="customer_name"
                                        name="customer_name"
                                        value={formData.customer_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customer_email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="customer_email"
                                        name="customer_email"
                                        value={formData.customer_email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customer_phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control form-control-lg"
                                        id="customer_phone"
                                        name="customer_phone"
                                        value={formData.customer_phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="number_of_people" className="form-label">Number of People</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        id="number_of_people"
                                        name="number_of_people"
                                        value={formData.number_of_people}
                                        onChange={handleChange}
                                        min="1"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="travel_date" className="form-label">Preferred Travel Date</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        id="travel_date"
                                        name="travel_date"
                                        value={formData.travel_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-warning btn-lg w-100" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit Booking"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Booking;