// Map example
const technologies = new Map()
technologies.set('react', { framework: true })
technologies.set('angular', { framework: false })

console.log(technologies.react)
console.log(technologies.get('react'))

const chavesVariadas = new Map([
    [function(){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'last')

console.log(chavesVariadas)