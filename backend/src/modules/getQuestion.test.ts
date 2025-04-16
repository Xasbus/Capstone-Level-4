import { getQuestion } from "./getQuestion";

describe("getQuestion", () => {
  it.skip("accepts a query object and returns a response", async () => {
    //ARRANGE
    const query = {
      amount: 3,
      category: 15,
      type: "multiple",
    };

    //ACT
    const result = await getQuestion(query);
    const question: string = result.question;
    const choices: Array<string> = result.choices;
    const answer: number = result.answer;

    //ASSERT
    expect(question).not.toBe("");
    expect(choices).toBeInstanceOf(Array);
    expect(Number(answer)).not.toBeNaN();
  });
  it.skip("accepts a query object with an amount, category, and type", () => {
    //ARRANGE
    const query = {
      amount: 3,
      category: 15,
      type: "multiple",
    };

    //ACT
    const result = getQuestion(query);

    //ASSERT
    expect(result).toBeDefined();
  });
});
