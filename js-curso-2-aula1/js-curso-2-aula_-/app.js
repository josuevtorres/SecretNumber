/// document acessa o html, .querySelector é case sensitive; usado para passar uma parte do
///body do html, no caso o h1/ título

////let title = document.querySelector("h1");
////tittle se refere agora ao documento do h1; title.innerHTML permite alterarmos o conteúdo.
////title.innerHTML = "Secret number Game";
///p é paragrafo no html; nesta linha, identamos o parágrafo como uma var "paragrafo"///
//let paragrafo = document.querySelector("p");
///alterando o conteúdo do parágrafo
//paragrafo.innerHTML = "Try a number between 1 & 10 ";

let randomNumberList = [];
let numberLimiter = 20;
let secretNumber = gerateRandomNumber();
let tries = 1;

function exibirTextoNaTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;

}
function inicialMensage() {
	exibirTextoNaTela("h1", "Secret_Number");
	exibirTextoNaTela("p", `Try a number between 1 & ${numberLimiter}`);
  
}

/// This is...ELON MUSK... zuera, é uma função; que definimos aqui no js, mas é usada no html
function tryVerification() {
	let Try = document.querySelector("input").value;

	console.log("The button has been clicked!");

	console.log(Try == secretNumber);

	if (Try == secretNumber) {
		exibirTextoNaTela("h1", "Acertou!");
		let tryWord = Try > 1 ? "tentativas" : "tentativa";
		let mensageTries = `Você acertou o secret number com ${tries} ${tryWord}!`;
		exibirTextoNaTela("p", mensageTries);
		document.getElementById("reiniciar").removeAttribute("disabled");
	} else {
		if (Try > secretNumber) {
			exibirTextoNaTela("p", "O número secreto é menor");
		} else {
			exibirTextoNaTela("p", "O número secreto é maior");
		}
		tries++;
		campCleaner();
	}
}
function gerateRandomNumber() {
	let choosenNumber = parseInt(Math.random() * numberLimiter + 1);
	let listElements = randomNumberList.length;
	if (listElements == numberLimiter) {
		randomNumberList = [];
	}

	if (randomNumberList.includes(choosenNumber)) {
		return gerateRandomNumber();
	} else {
		randomNumberList.push(choosenNumber);

		return choosenNumber;
	}
}

function campCleaner() {
	Try = document.querySelector("input");
	Try.value = "";
}

function restartGame() {
	secretNumber = gerateRandomNumber();
	campCleaner();
	tries = 1;
	inicialMensage();
	document.getElementById("reiniciar").setAttribute("disabled", true);
}

inicialMensage();
