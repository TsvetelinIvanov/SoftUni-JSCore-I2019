function register() {
     let usernameElement = document.getElementById('username');
     let emailElement = document.getElementById('email');
     let passwordElement = document.getElementById('password');   

     let usernameInput = usernameElement.value;   
     let emailInput = emailElement.value;
     let passwordInput = passwordElement.value;
  
     let pattrn = /(.+)@(.+).(com|bg)/gm;
     if (usernameInput.length > 0 && passwordInput.length > 0 && emailInput.match(pattrn)) {
         let resultElement = document.getElementById('result');
    
         let h1Element = document.createElement('h1');
         h1Element.textContent = 'Successful Registration!'
         resultElement.appendChild(h1Element);
        //  let pElementUsername = document.createElement('p');
        //  pElementUsername.textContent = `Username: ${usernameInput}`;
        //  resultElement.appendChild(pElementUsername);
        //  let pElementEmail = document.createElement('p');
        //  pElementEmail.textContent = `Email: ${emailInput}`
        //  resultElement.appendChild(pElementEmail);
        //  let pElementPassword = document.createElement('p');
        //  pElementPassword.textContent = `Password: ${('*').repeat(passwordInput.length)}`
        //  resultElement.appendChild(pElementPassword);

        resultElement.innerHTML += `Username: ${usernameInput}`;
        resultElement.appendChild(document.createElement('br'));
        resultElement.innerHTML += `Email: ${emailInput}`;
        resultElement.appendChild(document.createElement('br'));
        resultElement.innerHTML += `Password: ${('*').repeat(passwordInput.length)}`;

        usernameElement.value = '';
        emailElement.value = '';
        passwordElement.value = '';

        setTimeout(() => {
            resultElement.innerHTML = '';
        }, 5000);
     }
 }
