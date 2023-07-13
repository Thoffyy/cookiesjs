/*
     .------..
-          -
/              \
/                   \
/    .--._    .---.   |
|  /      -__-     \   |
| |                 |  |
||     ._   _.      ||
||      o   o       ||
||      _  |_      ||
C|     (o\_/o)     |O     Uhhh, this computer
\      _____      /       is like, busted or
 \ ( /#####\ ) /       something. So go away.
  \  `====='  /
   \  -___-  /
    |       |
    /-_____-\
  /           \
/               \
/__|  AC / DC  |__\
| ||           |\ \ 

*/




$("#inputDivId").hide();

$("#labelDivId").hide();

$("#bemVindoId").ready(validarCookieNome);


function validarCookieNome() {

  

    preencherCookie();

    

    if(meuCookie.nome != undefined) {

        $("#labelDivId").show();

        $("#labelId").text(meuCookie.nome );

        $("#inputDivId").hide();

    }

    else {

        $("#inputDivId").show();

    }

  

}

function preencherCookie() {

    var camposValor = document.cookie.split("; ");

    console.log(camposValor);

    for(var i=0; i < camposValor.length; i++) {

        var campoValorVetor = camposValor[i].split("=");

        console.log(campoValorVetor);

        meuCookie[campoValorVetor[0]] = campoValorVetor[1];

    }

    

    console.log(meuCookie);

    



}


$("#buttonEntrarId").click(entrar);


function entrar() {

  

    var nome = $("#inputNomeId").val();

    

    criarCookie("nome", nome, 2);

    

    validarCookieNome();

}


function criarCookie(campo, valor, dias) {
    let dataExpiracao = new Date();

    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 24 * 60 * 60 * 1000));



let campoExpires = "expires=" + dataExpiracao.toUTCString();

document.cookie = campo + "=" + valor + "; " + campoExpires;

}