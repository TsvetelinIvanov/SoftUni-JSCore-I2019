function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', addTotoNumbers);
	
    function addTotoNumbers() {
		let inputField = document.querySelector('input');
		let inputArray = Array.from(inputField.value.split(' '));
		let numbers = inputArray.map(Number);
		
		if (numbers.length !== 6) {
	    	return;
		}

		for (let number of numbers) {
	    	if (number < 1 || number > 49) {
				return;
	    	}
		}

		//numbers.sort((a,b) => a - b);
		let allNumbersDiv = document.getElementById('allNumbers');
		for (let i = 1; i <= 49; i++) {
	    	let numberDiv = document.createElement('div');
	    	numberDiv.textContent = i;
	    	numberDiv.classList.add('numbers');
	    	if (numbers.includes(i)) {
				numberDiv.style.backgroundColor = 'orange';
	    	}
		
	    	allNumbersDiv.appendChild(numberDiv);
		}
	    
		button.setAttribute('disabled', true);
		inputField.setAttribute('disabled', true);		
    }
}
