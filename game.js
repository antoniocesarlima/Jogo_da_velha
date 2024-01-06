
var c = 0;
const casas = Array(9).fill(0);
const casaTest = Array(9).fill(0);
console.log(casaTest);

function clickAction(n) {
	if (casaTest[n - 1] == "x" || casaTest[n - 1] == "o" || document.getElementById('result').innerHTML == "Temos um vencedor" || document.getElementById('result').innerHTML == "Temos um empate") {
		
	} else {
		++c;
		if (c % 2 == 0) {
			casas[n - 1] = true;
			casaTest[n - 1] = document.getElementById(`${n}`).innerHTML = "x";
			casaTest[n - 1].innerHTML = "x";
		} else {
			casas[n - 1] = false;
			casaTest[n - 1] = document.getElementById(`${n}`).innerHTML = "o";
			casaTest[n - 1].innerHTML = "o";
		}
		console.log(casas, c, casaTest);
	}

	function createButton(){
		console.log("entrou na função");
		var btn = document.createElement('button');
    	var lbl = document.createTextNode("REINICIAR");
		btn.id = "iDbutton";
		btn.appendChild(lbl);

		const resultID = document.getElementById("result");
		btn.addEventListener('click', function() {
			window.location.reload(true);
		})
		resultID.appendChild(btn);
	}

	if (c >= 5) {

		if (casaTest[0] == casaTest[1] && casaTest[1] == casaTest[2] && casaTest[0] != 0) {
			//colocar uma função aqui que receba o valor de "casaTest[]" e verifique se é x ou o e fale qual venceu
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[3] == casaTest[4] && casaTest[4] == casaTest[5] && casaTest[3] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"

		} else if (casaTest[6] == casaTest[7] && casaTest[7] == casaTest[8] && casaTest[6] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[0] == casaTest[4] && casaTest[4] == casaTest[8] && casaTest[0] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[2] == casaTest[4] && casaTest[4] == casaTest[6] && casaTest[2] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[0] == casaTest[3] && casaTest[3] == casaTest[6] && casaTest[0] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[1] == casaTest[4] && casaTest[4] == casaTest[7] && casaTest[1] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (casaTest[2] == casaTest[5] && casaTest[5] == casaTest[8] && casaTest[2] != 0) {
			document.getElementById('result').innerHTML = "Temos um vencedor"
		} else if (c == 9) {
			document.getElementById('result').innerHTML = "Temos um empate"
		}
	}

	if (document.getElementById("result").innerText == "Temos um vencedor" || document.getElementById('result').innerHTML == "Temos um empate") {
		createButton();
	}
}

