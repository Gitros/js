const numberInput = document.getElementById('number-input');
const resultOut = document.getElementById('result-out');
const resultBtn = document.getElementById('result-btn');

let x = parseInt(numberInput.value);

const wypisz = () => 
{
	for (let i = 0; i <= x; i++) {
		for (let j = 0; j <= i; j++){
		resultOut.textContent += "x";
		}

	};
};

resultBtn.addEventListener('click', wypisz);
