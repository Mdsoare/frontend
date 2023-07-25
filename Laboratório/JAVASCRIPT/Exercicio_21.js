function exibirDataHora(){
    let hora = document.getElementById("hora");
    hora.innerHTML = Date();
}

function ocultarDataHora(){
    let hora = document.getElementById("hora");
    hora.innerHTML = " ";
}

function leiaMais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display ="inline";
        maisTexto.style.display ="none";
        btnLeiaMais.innerHTML = "Saiba mais...";
    }else{
        pontos.style.display ="none";
        maisTexto.style.display ="inline";
        btnLeiaMais.innerHTML = "Saiba menos...";
    }
}