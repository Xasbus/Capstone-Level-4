import { output } from "../utils/output.js";

export function viewResp(resolveValue) {
  const response = JSON.parse(resolveValue);
  const results = response.results;
  const item = results[0];
  const item2 = results[1];
  const item3 = results[2];
  const question = item.question;
  const correctAns = item.correct_answer;
  const incorrects = item.incorrect_answers;
  const question2 = item2.question;
  const correctAns2 = item2.correct_answer;
  const incorrects2 = item2.incorrect_answers;
  const question3 = item3.question;
  const correctAns3 = item3.correct_answer;
  const incorrects3 = item3.incorrect_answers;

  const trivia = `<div style="width:fit-content";>${question}</div>
        <ol type="A" style="width:fit-content";>
        <li>${incorrects[0]}</li>
        <li>${incorrects[1]}</li>
        <li>${correctAns}</li>
        <li>${incorrects[2]}</li>
        </ol>
        <div style="width:fit-content";>${question2}</div>
        <ol type="A" style="width:fit-content";>
            <li>${incorrects2[0]}</li>
            <li>${incorrects2[1]}</li>
            <li>${incorrects2[2]}</li>
            <li>${correctAns2}</li>
        </ol>
        <div style="width:fit-content";>${question3}</div>
        <ol type="A" style="width:fit-content";>
            <li>${incorrects3[0]}</li>
            <li>${correctAns3}</li>
            <li>${incorrects3[1]}</li>
            <li>${incorrects3[2]}</li>
        </ol>`;
  output(trivia);
}
