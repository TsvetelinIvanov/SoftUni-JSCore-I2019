function solve() {
	let exerciseElement = document.getElementById('exercise');
	let buttons = Array.from(document.getElementsByTagName('button'));
	let resultElement = document.getElementById('result');
	let rightAnswers = ['2013', 'Pesho', 'Nakov'];
	let rightAnswersCount = 0;
	let hiddenSectionsCount = 0;

	buttons.forEach(button => {
		button.addEventListener('click', event => {
			let parent = button.parentNode;
			let inputElements = Array.from(parent.getElementsByTagName('input'));
			inputElements.forEach(input => {
				if(input.checked === true){
					hiddenSectionsCount++;
					let answer = input.value;
					if (rightAnswers.includes(answer)){
						rightAnswersCount++;
					}

					if (button.textContent === 'Get the results'){
						if (rightAnswersCount === 3){
							resultElement.textContent = `You are recognized as top SoftUni fan!`;
						} else {
							resultElement.textContent = `You have ${rightAnswersCount} right answers`;
						}
					} else {
						exerciseElement.children[hiddenSectionsCount].style.display = 'block';
					}
				}
			});
		});
	});
}