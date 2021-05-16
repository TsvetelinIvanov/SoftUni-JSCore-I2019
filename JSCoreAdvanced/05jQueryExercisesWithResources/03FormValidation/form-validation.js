//the first zero test in Judge don't past
function validate(){
    let $companyCheckBox = $('#company');
    $companyCheckBox.on('change', showOrHideCompanySubForm);
    let $submitButton = $('#submit');
    $submitButton.on('click', validateForm);

    function showOrHideCompanySubForm(){
        if($(this).is(':checked')){
            $('#companyInfo').css('display', 'block');
        }
        else{
            $('#companyInfo').css('display', 'none');
        }
    }

    function validateForm(event){
        event.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        //let passwordPattern = /^.{5,15}$/; //one test in Judge don't past
        let passwordPattern = /^\w{5,15}$/;
        let emaiPattern = /^.*?@.*?\..*/;
        let companyNumberPattern = /^[1-9][0-9]{3}$/;
        let areValidFields = true;

        let $username = $("#username");
        let $password = $("#password");
        let $confirmPassowrd = $("#confirm-password");
        let $email = $("#email");
        let $companyCheckbox = $("#company");
        let $validDiv = $("#valid");

        if($username.val().match(usernamePattern)){
            $username.css("border", "none");            
        }
        else {
            $username.css("border-color", "red");            
            areValidFields = false;
        }

        if($password.val().match(passwordPattern)){
            $password.css("border", "none");
        }
        else {
            $password.css("border-color", "red");            
            areValidFields = false;
        }
        
        if($confirmPassowrd.val().match(passwordPattern) && $confirmPassowrd.val() === $password.val()){
            $confirmPassowrd.css("border", "none");
        }
        else {
            $confirmPassowrd.css("border-color", "red");            
            areValidFields = false;
        }        

        if($email.val().match(emaiPattern)){
            $email.css("border", "none");
        }
        else {
            $email.css("border-color", "red");            
            areValidFields = false;
        }

        if($companyCheckbox.is(":checked")){
            let $companyNumber = $("#companyNumber");
            if($companyNumber.val().match(companyNumberPattern)){
                $companyNumber.css("border", "none");
            }
            else {
                $companyNumber.css("border-color", "red");                
                areValidFields = false;
            }
        }

        if(areValidFields){
            $validDiv.css("display", "block");
        }
        else {
            $validDiv.css("display", "none");
        }
    }
}