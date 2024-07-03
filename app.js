let numerosSorteados = [];
let numeroLimite = 10;

function gerarNumeroAleatorio() {
    if(numerosSorteados.length == numeroLimite){
        numerosSorteados = [];
    }

    let numero = parseInt(Math.random() * numeroLimite + 1);
    if(numerosSorteados.includes(numero)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numero);
        return numero;
    }
}

function verificarChute() {
    console.log(numerosSorteados);
    tentativa++;
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa < 2 ? " tentativa!" : " tentativas!";
        let mensagemTentativas = "Você descobriu o número secreto com "
        exibirTextoNaTela("h1", "PARABÉNS! VOCÊ ACERTOU!");
        exibirTextoNaTela("p", mensagemTentativas + tentativa + palavraTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número é menor que seu chute!");            
        } else {
            exibirTextoNaTela("p", "O número é maior que seu chute!");
        }
    limparCampo();
    }
}

function novoJogo(){
    tentativa = 0;

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();    
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10!");
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate:1.2});
}

novoJogo();


