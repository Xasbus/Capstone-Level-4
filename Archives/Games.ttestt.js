import React from "react";
import { Games } from "../src/Views/Games";
import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";

jest.mock("../../assets/showcasePic1.png", () => "mocked-image-path");
jest.mock("../../assets/showcasePic2.jpg", () => "mocked-image-path");
jest.mock("../../assets/showcasePic3.jpg", () => "mocked-image-path");

describe("Games Component", () => {
  it("renders Carousel", renderCarousel);
});

function renderCarousel() {
  // Arrange
  const head = document.querySelector("head");
  head.innerHTML = `<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>`;

  render(<Games />); // Renders the Games component

  //ACT
  const carousel = screen.getByTestId("carouselTest"); // Accesses the Carousel element by ID

  //ASSERT
  expect(carousel).toBeDefined();
}

// RENDER: function used to render react component
// creates a virtual representation of the carousel component so I can test it.

// SCREEN: object that provides access to the rendered DOM
