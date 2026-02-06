function solve() {
    let buttons = document.querySelectorAll('button');
    let nextButton = buttons[0];
    let cancelButton = buttons[1];
    let contentElement = document.getElementById('content');
    let firstStepDiv = document.getElementById('firstStep');
    let secondStepDiv = document.getElementById('secondStep');
    let thirdStepDiv = document.getElementById('thirdStep');

    cancelButton.addEventListener('click', hideExerciseContainer);
    nextButton.addEventListener('click', showFirstStep);

    function hideExerciseContainer() {
        //let exerciseContainer = document.getElementById('exercise'); - one test in Judge didn't get with this
        let exerciseContainer = document.querySelector('#exercise>section');

        //exerciseContainer.style.visibility = 'hidden';
        //exerciseContainer.style.visibility = 'none';
        exerciseContainer.style.display = 'none';
    }

    function showFirstStep() {
        contentElement.style.backgroundImage = 'none';
        //contentElement.style.display = 'none';
        firstStepDiv.style.display = 'block';
        nextButton.removeEventListener('click', showFirstStep);
        nextButton.addEventListener('click', showSecondStep);
    }

    function showSecondStep() {
        let inputs = document.querySelectorAll('input');
        let agreeInput = inputs[0];
        let disagreeInput = inputs[1];
        if (disagreeInput.checked) {
        }
        else if (agreeInput.checked) {
            firstStepDiv.style.display = 'none';
            secondStepDiv.style.display = 'block';
            nextButton.removeEventListener('click', showSecondStep);
            nextButton.addEventListener('click', showThirdStep);
            nextButton.style.display = 'none';
            setTimeout(() => {
                nextButton.style.display = 'inline';
            }, 3000);            
        }
    }

    function showThirdStep() {
        secondStepDiv.style.display = 'none';
        thirdStepDiv.style.display = 'block';
        nextButton.style.display = 'none';
        cancelButton.value = 'Finish';
        //cancelButton.textContent = 'Finish';
        //cancelButton.addEventListener('click', hideExerciseContainer);
    }
}
