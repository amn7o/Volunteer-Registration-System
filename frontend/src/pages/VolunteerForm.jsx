import { useState } from "react";
import API from "../api";

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    skills: "",
    availability: "",
    motivation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/volunteers/register",
        formData
      );

      alert("Volunteer Registered Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        age: "",
        skills: "",
        availability: "",
        motivation: "",
      });
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Volunteer Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="availability"
          placeholder="Availability"
          value={formData.availability}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="motivation"
          placeholder="Why do you want to volunteer?"
          value={formData.motivation}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;