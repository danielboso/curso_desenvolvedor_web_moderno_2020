// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico1 = lexico1.bind()
lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(null)
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(2, 3, 4, 5)
