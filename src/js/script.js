const litersBorsch = 48;
const weightPotato = 75;
const costKilo = 13;
const potatoesForLiterBorsch = 4;

function price(liter, potatoes, g, kg) {
  return Math.ceil((liter * potatoes * g) / 1000) * kg;
}

const cost = price(litersBorsch, potatoesForLiterBorsch, weightPotato, costKilo);
console.log(`Вам потрібно купити картоплі на суму: ${cost} грн`);
