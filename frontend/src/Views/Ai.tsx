import React from "react";
import { set } from "../modules/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../modules/getAnswer";
import { selectGlobalAnswer } from "../modules/Redux/stateSelector";

export function Ai() {
  const answer = useSelector(selectGlobalAnswer);
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Question:
        <br /> <input name="question" />
        <br />
        Context:
        <br />
        <textarea name="context"></textarea>
        <br />
        <input type="submit" />
      </form>
      {answer}
    </div>
  );
  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target.elements;
    const question = form.question.value;
    const context = form.context.value;
    const answer = await getAnswer(question, context);
    const action = set.globalAnswer(answer);
    dispatch(action);
  }
}
