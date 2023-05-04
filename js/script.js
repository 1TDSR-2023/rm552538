// var nome1 = "Petroni";
// let nome2 = "Derick";
// const nome3 = "Ruan";

// if(nome1 != ""){
//     let nome1 = "Geovana"
// }

// console.log(nome1)

let botao = document.getElementById("meu-btn");
// console.log(botao.textContent);

botao.addEventListener("click", function(){
    // console.log(this.textContent)
    // Função matemática Math
    // random = retorna um número aleatório entre 0 e 1
    // floor  = arredonda um número para baixo
    // ceil   = arredonda um número para cima
    // round  = arredonda aleatoriamente

    let r=0, g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    this.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b});`)

});

// Estudar
// querySelector
// querySelectorAll
// Array
// Estruturas de repetição