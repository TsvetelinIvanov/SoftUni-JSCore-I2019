function solve() {
    let input = document.getElementById('input').textContent;  
    let separatedInput = input.split('.');
    console.log(separatedInput.length)
  
    let output = document.getElementById('output');
    let p = document.createElement('p');
    for(let i = 0; i < separatedInput.length; i++) {
        if (separatedInput[i].length > 0) {
            p.textContent += separatedInput[i] + '.';
        }
    
        if ((i + 1) % 3 === 0) {
            output.appendChild(p);
            p = document.createElement('p');
        }
        else if (separatedInput.length - i <= 2) {
            output.appendChild(p);
        }
    }
}
