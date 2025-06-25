import axios from "axios";
import React, { useState } from "react";

export function CouponGame() {
  const [question, setQuestion] = useState("");
  return (
    <section>
      <button onClick={handleCoupon}>Click to Try the Game</button>
      <div>{question}</div>
    </section>
  );

  async function handleCoupon() {
    const baseUrl = "http://localhost:8000";
    const path = "/question";
    const query = "?amount=2&category=15&type=multiple";
    const url = baseUrl + path + query;

    const response = await axios.get(url);
    const rawJsonString = JSON.stringify(response.data);
    const parsedData = JSON.parse(rawJsonString);

    const { answer, choices, question } = parsedData;
    const correctAnswer = question.correct_answer;
    const incorrectAnswer = question.incorrect_answers;
    const gameQuestion = question.question;

    setQuestion(
      `Your question is .... ${gameQuestion}??  ${incorrectAnswer},${correctAnswer}`
    );
  }
}
