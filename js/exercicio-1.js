var trocouImagem = false;
var ocultouTexto = false;

let botao = document.getElementById("botao");
let corpo = document.getElementById("corpo");
let lista = document.getElementById("lista");
let envia = document.getElementById("envia");

let imagem = document.getElementById("imagem");

let trocaImagem = document.getElementById("trocaImagem");
let paragrafo = document.getElementById("paragrafo");
let ocultaElemento = document.getElementById("ocultaElemento");
let insereTexto = document.getElementById("insereTexto");

botao.addEventListener("click", function(){

    let r=0, g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    corpo.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b});`)

});

envia.addEventListener('click', () => {
    let input = document.getElementById("inputItem");
    let inputItem = input.value;
    let newItem = document.createElement('li')
    newItem.appendChild(document.createTextNode(inputItem));
    lista.appendChild(newItem);
    input.value = '';
});

insereTexto.addEventListener('click', () => {
    paragrafo.appendChild(document.createTextNode("Texto"));
});

ocultaElemento.addEventListener('click', () => {
    if(ocultaElemento){
        paragrafo.style.visibility = "hidden";
        ocultaElemento = false;
    }else{
        paragrafo.style.visibility = "visible";
        ocultaElemento = true;
    }
});

trocaImagem.addEventListener('click', () => {
    if(trocouImagem){
        imagem.src = "./img/lobo1.jpg";
        trocouImagem = false;
    }else{
        imagem.src = "./img/lobo2.jpg";
        trocouImagem = true;
    }
    
});
