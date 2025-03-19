export function output(
  message: string,
  outputTag = "outputTag",
  shouldAppend = true
) {
  const myElement = document.getElementById(outputTag);
  if (shouldAppend) myElement.innerHTML += message;
  else myElement.innerHTML = message;
}
