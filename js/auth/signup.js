//Implémenter le javascript de ma page

const inputNom=document.getElementById("NomInput");
const inputPrenom=document.getElementById("PrenomInput");
const inputMail=document.getElementById("EmailInput")
const inputPassword=document.getElementById("PasswordInput");
const inputValidationPassword=document.getElementById("ValidatePasswordInput");
const btnvalidation=document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOk= validateRequired(inputNom);
    const prenomOK = validateRequired(inputPrenom);
    const mailOk= validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOK && mailOk && passwordOk &&passwordConfirmOk){
        btnvalidation.disabled = false;
    }

    else
    {btnvalidation.disabled= true;
    }
}

function validateMail (input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = inputMail.value
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        //C'est ok
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
        //C'est pas ok
    }
}


function validateConfirmationPassword (inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
        //C'est ok
    }
    else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
        //C'est pas ok
    }
}


function validatePassword (input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputPassword.value
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        //C'est ok
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
        //C'est pas ok
    }
}


function validateRequired(input){
    if(input.value != ""){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        //C'est ok
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
        //C'est pas ok
    }
}

