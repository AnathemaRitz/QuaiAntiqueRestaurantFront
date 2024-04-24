const mailInput= document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin =  document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);
    //informations factices, il faudra appeler l'API ici pour vérifier les credentials en BDD


function checkCredentials(){
    if(mailInput.value=="test@mail.com" && passwordInput.value =="123"){
        alert("Vous êtes connecté");

        //Il faudra récupérer le vrai token.
        const token ="lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie

        setCookie("role","admin",7);


        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid")

    }
}