function toggle() {
    let spanButton = document.getElementsByClassName('button')[0];
    let divExtra = document.getElementById('extra');
    if (spanButton.textContent === 'More') {
    //if (spanButton.textContent === 'More' || spanButton.style.display === 'none') {
        spanButton.textContent = 'Less';
        divExtra.style.display = 'block';
    }
    else {
        spanButton.textContent = 'More';
        divExtra.style.display = 'none';
    }
}
