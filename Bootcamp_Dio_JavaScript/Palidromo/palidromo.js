// solução 1
function verificaPalindromo(string) {
	if (!string) return "string inexistente";
	console.log(string === string.split("").reverse().join("")); //split: separa as letras formando um array, reverse: revvrte a string, join: junta os elementos do array formando uma nova string
}

verificaPalindromo("eye");


// solução 2

function varificaPalindromo2(string) {
	if (!string) return "string inexistente";
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2("dog");