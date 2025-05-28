import axios from "axios";

export async function getAnswer(
  userQuestion: string,
  userContext: string
): Promise<string> {
  const domain = window.location.hostname;
  const deployedUrl = "https://lvl-4-capstone.uc.r.appspot.com";
  const localPort = "http://localhost:9000";

  let baseUrl: string;

  if (domain === "localhost") {
    baseUrl = localPort;
  } else {
    baseUrl = deployedUrl;
  }

  const url = `${baseUrl}/ai`;

  const data = {
    question: userQuestion,
    context: userContext,
  };
  const response = await axios.post(url, data);
  let answer: string = response.data;
  // if (!answer)
  //     "Sorry, I couldn't find the answer. But here is a cookie. (7^.^)> (::)";
  return `The answer is ${answer}. Hope this helps. This is render at ${baseUrl}.`;
}
