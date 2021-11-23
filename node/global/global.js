// console.log(global)
global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
}


//bloquear objeto global
// global.MinhaApp = Object.freeze({
//     saudacao(){
//         return 'Estou em todos os lugares'
//     },
//     nome: 'Sistema legal'
// })