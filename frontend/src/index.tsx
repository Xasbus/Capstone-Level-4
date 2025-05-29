import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Consoles } from "./Views/Consoles";
import { Games } from "./Views/Games";
import { Accessories } from "./Views/Accessories";
import { Contact } from "./Views/Contact";
import { Header } from "./Views/Header";
import { HandleRefresh } from "./Views/HandleRefresh";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./modules/Redux/store";
import { AccountInfoPage } from "./Views/User-Friendly/AccountInfoPage";

const domain = window.location.hostname; // Used to view the hostname you are in.
let rootPath = ""; // rootpath needs to be blank and able to change
if (domain === "xasbus.github.io") rootPath = "/Capstone-Level-4";
// Basically says if my rootpath is ^ then add /Capstone-Lvl-4 which is the repository name I chose.
// If the domain isn't that. Then leave it blank

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

root.render(
  <Provider store={store}>
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
          <Route path={`${rootPath}/contact`} element={<Contact />} />
          <Route
            path={`${rootPath}/accountInfo`}
            element={<AccountInfoPage />}
          />
        </Routes>
      </HandleRefresh>
    </BrowserRouter>
  </Provider>
);
