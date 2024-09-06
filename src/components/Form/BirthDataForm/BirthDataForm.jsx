import React, { useState, useContext } from "react";
import { BirthContext } from "../../../context/BirthContext";
import { useNavigate } from "react-router-dom";
import "./BirthDataForm.css";
import {
  generateDays,
  generateHours,
  generateMinutes,
  generateMonths,
  generateYears,
} from "../../../utils/FormLogic";

function BirthDataForm() {
  const { fetchData } = useContext(BirthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: "1",
    month: "1",
    year: "2001",
    hour: "1",
    minute: "1",
    location: "",
    longitude: 12.4963655,
    latitude: 41.9027835,
    timezone: "Europe/Rome",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetchData(e, formData);
    navigate("/result");
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="header">
          <h1>Enter your birth data</h1>
          <p>
            You can pull your astrology chart by filling in the requested
            information below.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="select-group">
            <select
              name="hour"
              className="form-select"
              value={formData.hour}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Hour
              </option>
              {generateHours()}
            </select>
            <select
              name="minute"
              className="form-select"
              value={formData.minute}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Minute
              </option>
              {generateMinutes()}
            </select>
          </div>
          <div className="select-group">
            <select
              name="day"
              className="form-select"
              value={formData.day}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Day
              </option>
              {generateDays()}
            </select>
            <select
              name="month"
              className="form-select"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Month
              </option>
              {generateMonths()}
            </select>
            <select
              name="year"
              className="form-select"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Year
              </option>
              {generateYears()}
            </select>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Get your chart
            </button>
          </div>
        </form>
        {/* {error && <div className="error-message">{error}</div>} */}
      </div>
    </div>
  );
}

export default BirthDataForm;
