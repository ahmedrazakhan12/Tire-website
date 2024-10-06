import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    make: "",
    model: "",
    year: "",
    serviceMessage: "",
    specialOffer: "",
    waitOrDropOff: "",
    location: "",
    firstDateChoice: "",
    firstTimeChoice: "",
    secondDateChoice: "",
    secondTimeChoice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send formData to a backend here
  };

  return (
      <>
        <h1 style={{marginLeft:'160px' , marginTop:'20px'}}>Appointments</h1>
    <form onSubmit={handleSubmit} className="appointments">
     <div style={{display:"flex" }}>
     <div style={{marginRight:"20px" , width:'100%'}}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{width:'100%'}}>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
     </div>

     <div style={{display:"flex" }}>
     <div style={{marginRight:"20px" , width:'100%'}}>
        <label>Email Address</label>
        <input
          type="email"
          name="email"

          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div  style={{width:'100%'}}>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      </div>

      <div style={{display:"flex" }}>
     <div style={{marginRight:"20px" , width:'100%'}}>
             <label>Vehicle Make</label>
        <select name="make" value={formData.make} onChange={handleChange} required>
          <option value="">Select Make</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div style={{width:'100%' , marginRight:"20px"}}>
        <label>Vehicle Model</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{width:'100%'}}>
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
          name="serviceMessage"
          value={formData.serviceMessage}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{display:"flex" }}>
     <div style={{marginRight:"20px" , width:'100%'}}>
     
        <label>Special Offers</label>
        <select
          name="specialOffer"
          value={formData.specialOffer}
          onChange={handleChange}
        >
          <option value="">Select Offer</option>
          <option value="$20 Off A/C Recharge"> $20 Off A/C Recharge or Repairs</option>
          {/* Add more offers as needed */}
        </select>
      </div>

      <div style={{marginRight:"20px" , width:'100%'}}>

        <label>Wait or Drop Off</label>
        <select
          name="waitOrDropOff"
          value={formData.waitOrDropOff}
          onChange={handleChange}
          required
        >
          <option value="">Select Option</option>
          <option value="Waiting">Waiting</option>
          <option value="Dropping Off">Dropping Off</option>
        </select>
      </div>

      <div style={{ width:'100%'}}>

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

     
     <div style={{display:"flex" }}>
     <div style={{marginRight:"20px" , width:'100%'}}>
        <label>First Choice Date</label>
        <input
          type="date"
          name="firstDateChoice"
          value={formData.firstDateChoice}
          onChange={handleChange}
        />
      </div>

     
     <div style={{marginRight:"20px" , width:'100%'}}>
        <label>First Choice Time</label>
        <input
          type="time"
          name="firstTimeChoice"
          value={formData.firstTimeChoice}
          onChange={handleChange}
        />
      </div>

      <div style={{ width:'100%'}}>
      <label>Second Choice Date</label>
        <input
          type="date"
          name="secondDateChoice"
          value={formData.secondDateChoice}
          onChange={handleChange}
        />
      </div>
      </div>

      <div>
        <label>Second Choice Time</label>
        <input
          type="time"
          name="secondTimeChoice"
          value={formData.secondTimeChoice}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Appointment;

