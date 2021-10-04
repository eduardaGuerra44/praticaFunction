
function elevaAoQuadrado(numero){
    return numero * numero; 
}

function delta (a,b,c) { 
   
    return b*b - 4*a*c; 
}

function enviarSMS(celular, msg){ 
    console.log ("-=-=-=-=-=-=-=-")
    console.log(`mensagem para: ${celular} `)
    console.log(msg) 
    console.log("-=-=-=-=Fim-=-=-=-")
    
}

module.exports = {elevaAoQuadrado, delta, enviarSMS}