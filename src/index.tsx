import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Consoles } from "./Views/Consoles";
import { Games } from "./Views/Games";
import { Accessories } from "./Views/Accessories";
import { About } from "./Views/About";
import { Contact } from "./Views/Contact";
import { Header } from "./Views/Header";
import { HandleRefresh } from "./Views/HandleRefresh";
import "./index.scss";

const domain = window.location.hostname; // Used to view the hostname you are in.
let rootPath = ""; // rootpath needs to be blank and able to change
if (domain === "xasbus.github.io") rootPath = "/Capstone-Lvl-3";
// Basically says if my rootpath is ^ then add /Capstone-Lvl-3 which is the repository name I chose.
// If the domain isn't that. Then leave it blank

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

root.render(
  <BrowserRouter>
    <HandleRefresh>
      <Header />
      <Routes>
        <Route path={`${rootPath}/`} element={<Home />} />
        <Route path={`${rootPath}/home`} element={<Home />} />
        <Route path={`${rootPath}/index.html`} element={<Home />} />
        <Route path={`${rootPath}/404.html`} element={<Home />} />
        <Route path={`${rootPath}/consoles`} element={<Consoles />} />
        <Route path={`${rootPath}/games`} element={<Games />} />
        <Route path={`${rootPath}/accessories`} element={<Accessories />} />
        <Route path={`${rootPath}/about`} element={<About />} />
        <Route path={`${rootPath}/contact`} element={<Contact />} />
      </Routes>
    </HandleRefresh>
  </BrowserRouter>
);
