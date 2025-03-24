function solve(){	
    let buttons = document.getElementsByTagName('button');
    let textAreas = document.getElementsByTagName('textarea');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);
    function encode(){
	let icputMessage = textAreas[0].value;
	let encodedMessage = '';
	icputMessage.split('').forEach((char) =>{
	    let asciiValue = char.charCodeAt(0) + 1;
	    encodedMessage += String.fromCharCode(asciiValue);
	});
	    
	textAreas[0].value = '';
	textAreas[1].value = encodedMessage;
    }

    function decode(){
	let encodedMessage = textAreas[1].value;
	let decodedMessage = '';
	encodedMessage.split('').forEach((char) => {
	    let asciiValue = char.charCodeAt(0) - 1;
	    decodedMessage += String.fromCharCode(asciiValue);
	});
	    
	textAreas[1].value = decodedMessage;
    }
}
