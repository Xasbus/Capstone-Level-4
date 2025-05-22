import React from "react";

export function Ai() {
  return (
    <div>
      <form>
        Question:
        <br /> <input name="question" />
        <br />
        Context:
        <br />
        <textarea name="context"></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
