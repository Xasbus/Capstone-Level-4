// This component fetches information from the backend and displays it.
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests [9, 10]
import { baseUrl } from "../utils/baseURL"; // Import the URL utility

export function ServerInfo() {
  // State variable to store the response from the backend
  const [backendStatus, setBackendStatus] = useState(
    "Loading server status..."
  );
  // State variable to store potential error messages
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to perform side effects like data fetching [11, 12]
  useEffect(() => {
    // Define an async function to fetch data
    async function fetchBackendStatus() {
      try {
        // Use the dynamically determined backend URL from baseUrl [13]
        // We'll try to hit the /api route, which is often used for data [14-17]
        const url = baseUrl.databaseServer + "/api"; // Use the determined backend URL

        // Send a GET request using Axios [10]
        const response = await axios.get(url); // Axios returns a promise [18, 19]

        // Axios automatically parses JSON responses into response.data [20, 21]
        const data = response.data;

        // Update the state with the received data (stringified for display)
        setBackendStatus(JSON.stringify(data, null, 2)); // Convert object to string for display [22]
        setError(null); // Clear any previous errors
      } catch (err: any) {
        // Handle potential errors (e.g., network issues, server not running)
        console.error("Error fetching backend status:", err);
        setBackendStatus("Failed to load server status.");
        // Store the error message in state
        setError(`Error: ${err.message || "Unknown error"}`);
      }
    }

    // Call the async fetch function when the component mounts [11, 12]
    // Use an empty dependency array [] so this runs only once on mount [12, 23]
    fetchBackendStatus();
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <main>
      <h1>Backend Connection Status</h1>
      <p>Checking connection to: {baseUrl.databaseServer}/api</p>{" "}
      {/* Show the URL being used */}
      <h3>Response:</h3>
      <pre>{backendStatus}</pre> {/* Display the backend response */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error if any */}
    </main>
  );
}
