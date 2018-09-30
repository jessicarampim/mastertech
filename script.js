function baixar(){
    alert("Parabéns, com isso você contribui com o Meio Ambiente!");
}

function inscrevase(){
    var texto = document.querySelector(".inscr");
    if(texto.value == ""){
        alert("Por favor digite um email válido");
    }else{
        alert("Olá, o email " + texto.value + " foi inscrito em nossa newsletter. Em breve você receberá nosso conteúdo.");
    }
}

function compartilhar(){
    var rede = prompt("Digite o nome da Rede Social que deseja compartilhar: \n\nFacebook \nLinkedin \nInstagram \nWhatsApp");
    if(!isNaN(rede)){
        alert("Rede Social Incorreta");
    }else{
        if(rede == "Facebook" || rede == "Linkedin" || rede == "Instagram" || rede == "WhatsApp"){
            alert("Você dividiu nossa causa com seus amigos em: " + rede);
        }else{
            alert("Esta Rede Social não existe.");
        }
    }
}



// let nome = prompt("Olá! Queremos saber o seu nome :) ");

// if(isNaN(nome)){
//     nome = "Pessoinha ";
// }

// document.getElementById('alertName').textContent = nome;