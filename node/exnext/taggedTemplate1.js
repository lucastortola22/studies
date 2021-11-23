// tagged template - processa o template dentro de uma funcao
function tag(partes, ... valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'GUI'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)


/**
 * Mascara de numeros
 * @param {*} partes 
 * @param  {...any} valores 
 * @returns 
 */
function real(partes, ...valores) {
    // console.log(partes)
    // console.log(valores)
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.90
const precoParcela = 10

console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)