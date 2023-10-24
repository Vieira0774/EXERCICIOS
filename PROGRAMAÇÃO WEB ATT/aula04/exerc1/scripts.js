const cl1 = document.getElementsByClassName("cl1");
const cl2 = document.getElementsByClassName("cl2");
const cl3 = document.getElementsByClassName("cl3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
let btn1Ativo = false;
let btn2Ativo = false;
let btn3Ativo = false;
let btn4Ativo = false;
let btn5Ativo = false;
let btn6Ativo = false;


btn1.addEventListener('click', function (){
    btn1Ativo = true;
    btn2Ativo = false;
    btn3Ativo = false;
    btn4Ativo = false;
    btn5Ativo = false;
    btn6Ativo = false;
    setInterval(funcaoA, 3000)
    alert("BOTÃO CLICADO 1!")
    
})



btn2.addEventListener('click', function (){
    btn1Ativo = false;
    btn2Ativo = true;
    btn3Ativo = false;
    btn4Ativo = false;
    btn5Ativo = false;
    btn6Ativo = false;
    setInterval(funcaoB, 3000)
    alert("BOTÃO CLICADO 2!")

})


btn3.addEventListener('click', function () {
    btn1Ativo = false;
    btn2Ativo = false;
    btn3Ativo = true;
    btn4Ativo = false;
    btn5Ativo = false;
    btn6Ativo = false;
    funcaoC();
});



btn4.addEventListener('click', function (){
    btn1Ativo = false;
    btn2Ativo = false;
    btn3Ativo = false;
    btn4Ativo = true;
    btn5Ativo = false;
    btn6Ativo = false;
    setInterval(funcaoD, 3000)
    alert("BOTÃO CLICADO 4!")
})

btn5.addEventListener('click', function (){
    btn1Ativo = false;
    btn2Ativo = false;
    btn3Ativo = false;
    btn4Ativo = false;
    btn5Ativo = true;
    btn6Ativo = false;
    setInterval(funcaoE, 3000)
    alert("BOTÃO CLICADO 5!")
})

btn6.addEventListener('click',function (){
    btn1Ativo = false;
    btn2Ativo = false;
    btn3Ativo = false;
    btn4Ativo = false;
    btn5Ativo = false;
    btn6Ativo = true;
    setInterval(funcaoF, 2000)
    alert("BOTÃO CLICADO 6!")
})
    

 function funcaoA() {
    var paragrafos = document.getElementsByTagName("p");

    for (var i = 0; i < paragrafos.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (1000 - 100)) + 100;
        paragrafos[i].innerHTML = numeroAleatorio;
    }
    
}

function funcaoB() {
    var paragrafos = document.getElementsByTagName("p");

    for (var i = 0; i < paragrafos.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (1000 - 100)) + 100;
        paragrafos[i].innerHTML = numeroAleatorio;
    }
}

function funcaoC() {
    var p3 = document.getElementById("p3");
    var nome = prompt("Digite seu nome")
    p3.innerHTML = "Bem vindo" + " " + nome
}

function funcaoD() {
    var paragrafos = document.getElementsByTagName("p");

    for (var i = 0; i < paragrafos.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (1000 - 100)) + 100;
        paragrafos[i].innerHTML = numeroAleatorio;
    }
}

function funcaoE() {
    var paragrafos = document.getElementsByTagName("p");

    for (var i = 0; i < paragrafos.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (1000 - 100)) + 100;
        paragrafos[i].innerHTML = numeroAleatorio;
    }
}

function funcaoF() {
    
            
            const p6 = document.getElementById("p6")
            p6.innerHTML = "";
            p6.innerHTML += "<table border=1><tr><td>"+"milisegundo"+"</td><td>"+"num aleatorio"+"</td></tr></table>";
            for (var i = 0; i < 15; i++) {
                var datetime = new Date ();
                var milisec = datetime.getMilliseconds();
                var valorAleatorio = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
                p6.innerHTML += "<table border=1><tr><td>"+milisec+"</td><td>"+valorAleatorio+"</td></tr></table>";
                

            }
            
            }
    
    
