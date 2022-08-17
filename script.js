const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const btnCopy = document.querySelector(".copiar");

//Encriptar mensagem

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


//Desencriptar mensagem

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botão copiar

function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

 