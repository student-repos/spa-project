import React, { createContext, useState, useNavigate } from "react";

export const BirthContext = createContext();

export const BirthProvider = ({ children }) => {
  const [birthData, setBirthData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = async (e, formData) => {
    e.preventDefault();

    const url = "https://astrologer.p.rapidapi.com/api/v4/natal-aspects-data";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "fce095c119msh96545eb09bec544p165d0cjsnff956e0564ea",
        "x-rapidapi-host": "astrologer.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: {
          name: "User",
          year: formData.year,
          month: formData.month,
          day: formData.day,
          hour: formData.hour,
          minute: formData.minute,
          longitude: formData.longitude,
          latitude: formData.latitude,
          city: formData.location,
          nation: "IT",
          timezone: formData.timezone,
          zodiac_type: "Tropic",
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      if (result && result.data && result.data.subject) {
        setBirthData(result.data);
      } else {
        setError("Failed to fetch astrology data.");
      }
    } catch (error) {
      console.error("Error fetching astrology data:", error);
      setError("An error occurred while fetching astrology data.");
    }
  };

  return (
    <BirthContext.Provider
      value={{
        birthData,
        setBirthData,
        fetchData,
      }}
    >
      {children}
    </BirthContext.Provider>
  );
};
