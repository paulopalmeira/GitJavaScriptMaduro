const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

aval1 = 5
aval2 = 3

total = aval1 * peso1 + aval2 * peso2
media = total / (peso1+peso2)

console.log(media.toFixed(2))  //duas casas depois da virgula