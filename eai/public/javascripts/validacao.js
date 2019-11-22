//validação do form usando jquery
// debugger
function validacao(){
    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#password").val();
    var repsenha = $("#repsenha").val();
    var enquadramento = $("#enquadramento").val();


    if(nome == ""){
        alert("insira um nome")
        $("nome").focus();
        return false;
    }

    if(email == ""){
        alert("insira um e-mail")
        $("email").focus();
        return false;

    }

    if(senha == ""){
        alert("insira uma senha")
        $("senha").focus();
        return false;

    }

    if(repsenha != senha){
        alert("senha incorreta")
        $("repsenha").focus();
        return false;

    }

    return true
}