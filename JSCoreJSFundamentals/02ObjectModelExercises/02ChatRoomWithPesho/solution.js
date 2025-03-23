function solve() {
 let buttons = Array.from(document.getElementsByTagName('button'));
 let inputs = Array.from(document.getElementsByTagName('input'));
 
 buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        let div = document.createElement('div');
        let span = document.createElement('span');
        let p = document.createElement('p');
        let senderButtonName = event.target.name;
        if (senderButtonName === 'myBtn'){
            span.textContent = 'Me';
            p.textContent = document.getElementById('myChatBox').value;
            div.style.textAlign = 'left';
        } else if (senderButtonName === 'peshoBtn'){
            span.textContent = 'Pesho';
            p.textContent = document.getElementById('peshoChatBox').value;
            div.style.textAlign = 'right';
        }

        div.appendChild(span);
        div.appendChild(p);
        let chatChronology = document.getElementById('chatChronology');
        chatChronology.appendChild(div);
     
        inputs[0].value = '';
        inputs[1].value = '';
    })
 })
}
