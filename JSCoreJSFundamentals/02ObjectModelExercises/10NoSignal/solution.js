function solve() {
    let exerciseDiv = document.getElementById('exercise');
    let noSignalDiv = exerciseDiv.getElementsByTagName('div')[0];

    // setTimeout(() => {//it changes its position only once
    // 	    let horizontalRandomNumber = Math.floor(Math.random() * 81) + 1;
    // 	    let verticalRandomNumber = Math.floor(Math.random() * 45) + 1;
    // 	    noSignalDiv.style.position = `absolute`;
    // 	    noSignalDiv.style.top = `${horizontalRandomNumber}%`;
    // 	    noSignalDiv.style.left = `${verticalRandomNumber}vh`;
    // }, 2000);
    setInterval(function() {
		let horizontalRandomNumber = Math.floor(Math.random() * 81) + 1;
		let verticalRandomNumber = Math.floor(Math.random() * 45) + 1;
		noSignalDiv.style.position = `absolute`;
		noSignalDiv.style.top = `${horizontalRandomNumber}%`;
		noSignalDiv.style.left = `${verticalRandomNumber}vh`;
    }, 2000);
}
