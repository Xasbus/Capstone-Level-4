import express from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";

const hostname = "localhost"; // local domain
const port = 8000; // common backend ports: 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser

const app = express(); // instantiate the Express.js  onject
app.use(cors());
app.get("/", root);
app.get("/api", api);
app.get(path, root); // This handler is to handle things that go through this path
app.listen(port, hostname, handleListen);
// app is object - get/listen is the method

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`LOG: Open a new terminal and run 'npm run build'`);
  console.log(
    `LOG: To debug, start this server in a JavaScript Debug Terminal`
  );
}
