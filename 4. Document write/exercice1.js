let number1 = Number(window.prompt("Entrer le premier nombre"));
let operator = window.prompt("Entrer l'opérateur");
let number2 = Number(window.prompt("Entrer le deuxième nombre"));

while (isNaN(number1)) {
  document.write(`<p>le premier nombre n'est pas en chiffre</p>`);
  number1 = Number(window.prompt("Entrer le premier nombre"));
}
  operator !== "+" &&
  operator !== "-" &&
  operator !== "/" &&
  operator !== "*"
{
  operator = window.prompt("Entrer un opérateur valide");
}

while (isNaN(number2) || number2 === 0) {
  document.write(`<p>le deuxieme nombre n'est pas en chiffre</p>`);
  number2 = Number(window.prompt("Entrez le deuxième nombre"));
}

switch (operator) {
  case "+":
    document.write(`<p> ${number1} + ${number2} = ${number1 + number2}</p>`);
    break;
  case "-":
    document.write(`<p> ${number1} - ${number2} = ${number1 - number2}</p>`);
    break;
  case "*": 
    document.write(`<p> $${number1} * ${number2} = ${number1 * number2} </p>`);
    break;
  case "/":
    document.write(`<p> ${number1} / ${number2} = ${number1 / number2} </p>`);
    break;
}