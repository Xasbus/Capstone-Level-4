export function aiUrl() {
  const domain = window.location.hostname;
  const deployedUrl = "https://lvl-4-capstone.uc.r.appspot.com";
  const localPort = "http://localhost:9000";

  let baseUrl: string;

  if (domain === "localhost") {
    baseUrl = localPort;
  } else {
    baseUrl = deployedUrl;
  }
  return baseUrl;
}
