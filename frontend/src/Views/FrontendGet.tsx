import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FrontendGet() {
  const [backendData, setBackendData] = useState();

  useEffect(() => {
    const fetchBackendData = async () => {
      const response = await axios.get("http://localhost:8000/api"); // GET request to backend API
      setBackendData(response.data); // Store retrieved data
    };

    fetchBackendData(); // Calls the function immediately upon component mount
  }, []);
  return (
    <div>
      <h2>Data from Backend (GET):</h2>
      {/* If data exists, display it in JSON format; otherwise, show 'Loading...' */}
      {backendData ? (
        <pre>{JSON.stringify(backendData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

