export function databaseUrl() {
  const domain = window.location.hostname;
  const deployedUrl =
    "https://lpyqdwgkcrzfk553sygn7ijile0vzovm.lambda-url.us-east-2.on.aws";
  const localPort = "http://localhost:8000";

  let baseUrl: string;

  if (domain === "localhost") {
    baseUrl = localPort;
  } else {
    baseUrl = deployedUrl;
  }
  return baseUrl;
}
