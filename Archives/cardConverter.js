export function cardConverter(cardObject) {
  let cardString = `<div class="card" style="width: 40rem">
    <img class="card-img-top" src="${cardObject.src}">
    <div class="card-body">
    <h3 class="card-title">${cardObject.title}</h3>
    ${cardObject.summary}
    </div>
    </div>`;
  return cardString;
}
