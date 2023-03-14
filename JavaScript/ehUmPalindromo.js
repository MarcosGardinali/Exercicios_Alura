essaPalavraEUmPalindromo("radar");

function essaPalavraEUmPalindromo(palavra){
	var separandoLetrasPalavra = palavra.split("");
	var palavraInvertida = separandoLetrasPalavra.reverse();
	palavraInvertida = palavraInvertida.join("");
	if (palavra == palavraInvertida){
		console.log("A palavra " + palavra + " é um palíndromo!!");
	} else{
		console.log("A palavra " + palavra + " não é um palíndromo!!");
	}
}