
var c = 0;
var casas = Array(9).fill(0)
var casaTest = Array(9).fill(0);
console.log(casaTest);
 function clicar(n) {
 	++c;
 	console.log("deu certo");
 	if(c % 2 == 0){
 		casas[n-1] = true;
 		casaTest[n-1] = document.getElementById(`${n}`).innerHTML = "x";
 		casaTest[n-1].innerHTML = "x"
 		console.log("true");
 	} else {
 	casas[n-1] = false;
 	casaTest[n-1] = document.getElementById(`${n}`).innerHTML = "o";
 	casaTest[n-1].innerHTML = "o"
 	console.log("false");
 	}
 	console.log(casas, c, casaTest);

 	//agora contrua o teste logico para dizer quem ganhou
 	//Não esta funcionando a logica abaixo
 	if(c >= 5){

 		if(casaTest[0] == casaTest[1] && casaTest[0] == casaTest[2]){
 			document.getElementById('result').innerHTML = "Temos um vencedor"
 		} else if(casaTest[3] == casaTest[4] && casaTest[3] == casaTest[5]){
 			document.getElementById('result').innerHTML = "Temos um vencedor"
 		} else if(casaTest[6] == casaTest[7] && casaTest[6] == casaTest[8]){
 			document.getElementById('result').innerHTML = "Temos um vencedor"
 		} else if(casaTest[0] == casaTest[4] && casaTest[0] == casaTest[8]){
 			document.getElementById('result').innerHTML = "Temos um vencedor"
 		} else if(casaTest[2] == casaTest[4] && casaTest[2] == casaTest[6]){
 			document.getElementById('result').innerHTML = "Temos um vencedor"
 		} else if(c == 9){
 			document.getElementById('result').innerHTML = "Temos um empate"
 		}
 	}
 }

