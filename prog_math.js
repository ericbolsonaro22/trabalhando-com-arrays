const ler = require('readline-sync')

function leitura(){
    let num1 = ler.question('Digite um numero real: ')
    let num2 = calcula(num1) // chama a função
    console.log(`num 2 = ${num2}`)
}

function calcula(){
    let numero1 = Math.floor(num1) // arredonda para baixo
    let numero2 = Math.ceil(3.11) // arredonda para cima
    console.log(`numero 1: ${numero1}`)
    console.log(`numero 2: ${numero2}`)
    return numero1
}

leitura()