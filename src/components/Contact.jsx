import { useState } from "react";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mgojybzv";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      const data = await response.json();
      const errorMessage = data.errors
        ? data.errors.map((error) => error.message).join(" ")
        : "Something went wrong. Please try again.";
      setStatus(errorMessage);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <span className="section-tag">
          CONTACT
        </span>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <h3>Email</h3>
              <p>workwithpatience247@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Nigeria</p>
            </div>

            <div className="info-card">
              <h3>Availability</h3>
              <p>Open to internships, freelance and full-time opportunities.</p>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

            {status === "SUCCESS" && (
              <p className="form-status form-success">
                Thank you! Your message has been sent.
              </p>
            )}

            {status && status !== "SUCCESS" && (
              <p className="form-status form-error">{status}</p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;