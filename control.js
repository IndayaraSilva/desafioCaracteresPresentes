debugger;

var qtdFrases = parseInt(prompt("Quantas frases você quer digitar?"));
var frases = [];
var frase = "";

// Identificar a quantidade de frases para perguntar [FUNCIONANDO]
while (frases.length < qtdFrases) {
    var frase = prompt("Digite a sua frase")
    frases.push(frase);
}

// Verificar caracteres
var frasesComCaracter = [];
var quaisCaracteres = prompt("Quais caracteres você quer identificar nas frases?");

for (var indice = 0; indice < frases.length; indice ++) {
    if (frases[indice].toLowerCase().includes(quaisCaracteres.toLowerCase())) { 
        frasesComCaracter.push(frases[indice])
    }
}

alert("Frases ditas: " + frases +
    "\nFrases com o caractere escolhido: " + frasesComCaracter); 