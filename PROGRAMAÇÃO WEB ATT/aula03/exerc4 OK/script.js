const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const calcular = document.getElementById("calcular")
const media = document.getElementById("media")

calcular.addEventListener("click", function(){
    let notaTotal
    notaTotal = (parseFloat(nota1.value)+parseFloat(nota2.value)+parseFloat(nota3.value))/3
    media.value = notaTotal

})


