const loginform = document.getElementById("Login_Form");
const loginbottom = document.getElementById("");
const loginErrorMSg = document.getElementById("");

loginbottom.addEventListener("click", (e)=>{
    e.preventDefault();
    let username = loginform.username.value;
    let password = loginbottom.password.value;
    if(username ==="user" && password ==="user"){alert("Login conectado com sucesso")
    location.reload();
    window.location.href="parrallax/index.html";}
    else{
        loginErrorMSg.style.opacity = 1;
    }
})