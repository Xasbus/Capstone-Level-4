export function cardConverter(cardObject: any) {
  let cardString = `<div class="card">
    <img class="card-img-top" src="${cardObject.src}">
    <div class="card-body">
    <h3 class="card-title">${cardObject.title}</h3>
    ${cardObject.summary}
    </div>
    </div>`;
  return cardString;
}
