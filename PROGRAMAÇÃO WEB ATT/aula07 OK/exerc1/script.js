let linhas = document.getElementById("linhas");

const btn = document. getElementById("btn");

const tabela = document.getElementById("tabela");

btn.addEventListener("click", funcaoA);

function funcaoA(){
    
    const gerarLinhas = linhas.value;
    tabela.innerHTML = "<tr><td>Milisegundo</td><td>Valor Aleatório</td></tr>"
    

    for(let j=0; j<gerarLinhas; j++){
        const datetime = new Date ();
        const milisec = datetime.getMilliseconds();
        const valorAleatorio = Math.random().toPrecision(5);
        tabela.innerHTML += "<tr><td>"+milisec+"</td><td>"+valorAleatorio+"</td></tr>";
        
    }
}


