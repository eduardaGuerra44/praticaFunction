const {elevaAoQuadrado, delta, enviarSMS} = require('./funcoes.js')

// testando as funções = = = = = = =


var d= delta(1,2,3);
console.log(d)

var x= elevaAoQuadrado(5)
console.log(x)


// teste de mensagem
enviarSMS(31982061195, "Olá Duda")
