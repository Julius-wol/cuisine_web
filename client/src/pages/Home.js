import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    setFormData({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-images">
          <div className="images-grid">
            <img
              src="/images/c50a8fc4-nha-hang-5-sao-quan-1-thumb.jpg"
              alt="Vietnamese Restaurant 1"
              className="restaurant-image"
            />
            <img
              src="/images/nha-hang-5-sao-da-nang-2.jpg"
              alt="Vietnamese Restaurant 2"
              className="restaurant-image"
            />
            <img
              src="/images/restaurant3.jpg"
              alt="Vietnamese Restaurant 3"
              className="restaurant-image"
            />
            <img
              src="/images/restaurant4.jpg"
              alt="Vietnamese Restaurant 4"
              className="restaurant-image"
            />
          </div>
        </div>
        <div className="registration-section">
          <h2>Your registration information</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your name..."
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name..."
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
