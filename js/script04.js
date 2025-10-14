let contador = 1;
let soma = 0;

while (contador <= 5) {
  let entrada = prompt(`Digite o ${contador}º número inteiro:`); 
  let numero = parseInt(entrada);

  if (numero) {
    soma += numero;
    contador++;
  } else {
    console.log("Por favor, digite um número inteiro válido.");
  }
}

let media = soma / 5;
console.log("A média dos números digitados é: " + media);