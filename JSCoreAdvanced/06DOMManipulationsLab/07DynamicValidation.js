function validate(){
    let inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', validateEmail);

    function validateEmail(){
        let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let email = inputEmail.value;
        if(emailPattern.test(email)){
            inputEmail.removeAttribute('class');
        }
        else {
            inputEmail.className = 'error';
        }
    }
}