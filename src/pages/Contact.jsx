import { useState } from 'react'
import api from '../api'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        api.post("contact/", formData)
            .then((response) => {
                setSuccess("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error sending message:", error);
                setError("Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <section className="contact-hero d-flex align-items-center text-white">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead mt-3">Have questions or want to plan your next adventure? We'd love to hear from you!</p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <h2 className="fw-bold mb-3">Get in Touch</h2>
                            <p className="text-muted mb-4">
                                Whether you have questions about our safaris,
                                custom itineraries, or bookings, our team is
                                ready to help.
                            </p>
                            <div className="contact-info">
                                <p>
                                    📍 Nairobi, Kenya
                                </p>

                                <p>
                                    📞 +254 700 000 000
                                </p>

                                <p>
                                    ✉️ info@tuliatwendeafrica.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-card">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-warning" disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                                {success && (
                                    <div className="text-success alert alert-success mt-3">
                                        {success}
                                    </div>
                                )}
                                {error && (
                                    <div className="text-danger alert alert-danger mt-3">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact