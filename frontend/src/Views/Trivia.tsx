import axios from "axios";
import React, { useState } from "react";

export function Trivia() {
  const [trivia, setTrivia] = useState("");
  return (
    <section>
      <button onClick={handleClick}>Click to get QUESTION!!!!!</button>
      <blockquote>{trivia}</blockquote>
    </section>
  );

  async function handleClick() {
    debugger;
    const baseUrl = "http://localhost:8000";
    const path = "/question";
    const query = "?amount=3&category=15&type=multiple";
    const url = baseUrl + path + query;
    debugger;
    const response = await axios.get(url);
    const result = JSON.stringify(response.data);
    setTrivia(result);
  }
}
