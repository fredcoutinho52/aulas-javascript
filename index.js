// função normal
function soma(num1, num2) {
    console.log(num1 + num2);
}

// soma(2, 3);

// função anônima
const subtracao = function (num1, num2) {
    console.log(num1 - num2);
}

// subtracao(5, 2);

// arrow function
const multiplicacao = (num1, num2) => num1 * num2;

// const resultado = multiplicacao(6, 8);
// console.log(resultado);

const dobra = numero => numero * 2;
// console.log(dobra(2));


// var / let / const
const numero = 1; // não é mutável

var nome = "Brenda";
// console.log(nome);

var nome = "Fred";
// console.log(nome);

let idade = 21;
console.log(idade);

idade = 18;
console.log(idade);


function mostraIdade() {
    let idade = 20;
    console.log(idade);
}

mostraIdade();