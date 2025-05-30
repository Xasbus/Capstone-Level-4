// This utility determines the correct backend URL based on the frontend's environment.

// These URLs for deployed/local environments would typically be
// injected during the build process using environment variables.

// Use placeholder strings here, in a real app these would be
// configured via environment variables or build settings.
const localDatabaseUrl = "http://localhost:8000"; // Example local backend address [4, 5]
const localAiUrl = "http://localhost:9000"; // Example local AI backend address [6]

// Placeholder for your actual deployed backend URLs
// In a real app, these would come from process.env injected variables
const deployedDatabaseUrl =
  "https://lpyqdwgkcrzfk553sygn7ijile0vzovm.lambda-url.us-east-2.on.aws/";
const deployedAiUrl = "https://lvl-4-capstone.uc.r.appspot.com";

// Default to deployed URLs
let databaseUrl = deployedDatabaseUrl;
let aiUrl = deployedAiUrl;

const hostname = window.location.hostname;
const isRunningLocally = hostname === "localhost";

if (isRunningLocally) {
  databaseUrl = localDatabaseUrl;
  aiUrl = localAiUrl;
}

// Export the determined URLs for other parts of the frontend to use
export const baseUrl = {
  databaseServer: databaseUrl,
  aiServer: aiUrl,
};
