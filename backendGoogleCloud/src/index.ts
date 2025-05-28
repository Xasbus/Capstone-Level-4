import express, { json, urlencoded } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";
import dotenv from "dotenv";
import { ai } from "./routes/ai";
import { postAnswer } from "./modules/postAnswer";

dotenv.config();

const hostname = "localhost"; // local domain
const port: any = process.env.PORT; // common backend ports: 8000, 9000, 3000
// const path = "/"; // The path where server info will be rendered in a browser

const app = express(); // instantiate the Express.js  object
app.use(cors()); //Allows communication with the frontend
app.use(urlencoded());
app.use(json()); // Allows data to be received from axios through JSON params

app.get("/", root);
app.get("/api", api);
// app.get(path, handler); // This handler is to handle things that go through this path
app.post("/ai", ai); // Use the HTTP method POST to receive data securely and unaltered (without special characters)
app.post("/postAnswer", postAnswer);
app.listen(port, hostname, handleListen);
// app is object - get/listen is the method

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`LOG: Open a new terminal and run 'npm run start2'`);
  console.log(
    `LOG: To debug, start this server in a JavaScript Debug Terminal`
  );
}
