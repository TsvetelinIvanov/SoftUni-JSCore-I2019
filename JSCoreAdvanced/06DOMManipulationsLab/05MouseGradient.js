function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', showGradient);
    gradientElement.addEventListener('mouseout', hideGradient);

    function showGradient(event) {
        let gradient = event.offsetX / (event.target.clientWidth - 1);
        gradient = Math.trunc(gradient * 100);
        resultElement.textContent = gradient + '%';
    }

    function hideGradient() {
        resultElement.textContent = '';
    }
}
