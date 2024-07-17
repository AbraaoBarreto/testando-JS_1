// 1-Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

// 2-Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarBotao() {
    console.log('O botão foi clicado.');
}

// 3-Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function botaoAlerta() {
    alert('Eu amo JS!');
}

// 4-Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function perguntaCidade() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

// 5-Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
let num1;
let num2;
let num3;
function somarNum() {
    num1 = parseInt(prompt('Insira um número:'));
    num2 = parseInt(prompt('Insira outro número:'));
    num3 = num1 + num2;
    alert(`A soma entre ${num1} e ${num2} é igual a: ${num3}`);
}