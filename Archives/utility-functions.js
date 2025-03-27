function display(message) {
  document.write(message);
}

// function cardConverter(cardObject) {
//   let cardString = `<div class="card" style="width: 25%">
//   <img class="card-img-top" src="${cardObject.src}">
//   <div class="card-body">
//   <h3 class="card-title">${cardObject.title}</h3>
//   ${cardObject.summary}
//   </div>
//   </div>`;
//   return cardString;
// }

function ask(message) {
  const userText = prompt(message);
  const userNumber = Number(userText);
  const isNotNumber = isNaN(userNumber);
  if (isNotNumber) {
    return userText;
  } else {
    return userNumber;
  }
}

// function output(message = "", outputTag = "outputTag", shouldAppend = true) {
//   if (shouldAppend) window[outputTag].innerHTML += message;
//   else window[outputTag].innerHTML = message;
// }
