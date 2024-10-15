import axios from "axios";
import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    vehicle_make: "",
    vehicle_model: "",
    year: "",
    service_needed: "",
    special_offers: "",
    wait_or_drop_off: "",
    location: "",
    first_choice_date: "",
    first_choice_time: "",
    second_choice_date: "",
    second_choice_time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send formData to a backend here
    try {
      const response = await axios.post(
        "https://tirealigners.com/admin/api/appointment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 style={{ marginLeft: "160px", marginTop: "20px" }}>Appointments</h1>
      <form onSubmit={handleSubmit} className="appointments">
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>Vehicle Make</label>
            <select
              name="vehicle_make"
              value={formData.vehicle_make}
              onChange={handleChange}
              required
            >
              <option value="">Select Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div style={{ width: "100%", marginRight: "20px" }}>
            <label>Vehicle Model</label>
            <input
              type="text"
              name="vehicle_model"
              value={formData.vehicle_model}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <label>Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label>Service Needed</label>
          <textarea
            name="service_needed"
            value={formData.service_needed}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>Special Offers</label>
            <select
              name="special_offers"
              value={formData.special_offers}
              onChange={handleChange}
            >
              <option value="">Select Offer</option>
              <option value="$20 Off A/C Recharge">
                {" "}
                $20 Off A/C Recharge or Repairs
              </option>
              {/* Add more offers as needed */}
            </select>
          </div>

          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>Wait or Drop Off</label>
            <select
              name="wait_or_drop_off"
              value={formData.wait_or_drop_off}
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              <option value="Waiting">Waiting</option>
              <option value="Dropping Off">Dropping Off</option>
            </select>
          </div>

          <div style={{ width: "100%" }}>
            <label>Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              <option value="Melbourne">Melbourne</option>
              {/* Add more locations as needed */}
            </select>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>First Choice Date</label>
            <input
              type="date"
              name="first_choice_date"
              value={formData.first_choice_date}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginRight: "20px", width: "100%" }}>
            <label>First Choice Time</label>
            <input
              type="time"
              name="first_choice_time"
              value={formData.first_choice_time}
              onChange={handleChange}
            />
          </div>

          <div style={{ width: "100%" }}>
            <label>Second Choice Date</label>
            <input
              type="date"
              name="second_choice_date"
              value={formData.second_choice_date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Second Choice Time</label>
          <input
            type="time"
            name="second_choice_time"
            value={formData.second_choice_time}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Appointment;
