var bt = document.querySelector("#botao");
var email = document.getElementById("email");
function validar(){
    if(email.value == null || email.value == ""){
        return false;
    }else{
        return true;
    }
}

bt.addEventListener("click", ()=>{
    var valida = validar();
    if(valida){
        alert("Sua senha foi alterada e enviada para o e-mail");      
        window.history.go(-1);
    }else{
        var output = document.getElementById("mensagem");
        output.innerHTML = `<p style="color:#3F5695;text-align:center;margin-top:30px;font-style: normal;font-size: 14px;font-family:medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;">*Informar um e-mail válido!</p>`;  
        
    }
})


var id = null;
function mover() {
    var elem = document.getElementById("cadastro");   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(pos == 30){
            clearInterval(id);
        }else{
            pos++;
            elem.style.right = pos + 'px'; 
            console.log(elem.style.right);
        }
    }
}


// var seta = document.getElementById("cadastro");
// seta.addEventListener("mouseover", ()=>{
//     mover();
//     seta.innerHTML = `<div style="width: 85px; height: 30px;" id="cadastro"><a style="font-family: medium-content-sans-serif-font, -apple-system; display: block; margin-bottom: 10px; margin-left: 0px; display: block; padding-bottom: 10px; text-decoration: none; font-size: 17px;" href="login.html">↩ Login</a></div>`
// })